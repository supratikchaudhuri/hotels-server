import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"

import userRouter from "./routes/userRouter.js"
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";

dotenv.config()
const app = express()

app.use(express.json()) //parsing http data
app.use(express.json({limit: "30mb", extended: true})); 
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// 'mongodb://localhost/hotels', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
mongoose
    .connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    // .connect('mongodb://localhost/hotels', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        console.log("connected to DB");
    })
    .catch(err => {
        console.log("Error connecting to DB: ", err.message);
    })

app.get("/", (req, res) => {
    res.send("Hello from Server")
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb'); 
})

//errors wrapped in expressAsyncHandler will be sent here
app.use((err, req, res, next) => {
    res.status(500).send(err)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`server running on port: ${PORT}`)})

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    //tells the server to look for build in client
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.json(__dirname + '/client/build/index.html'))
    });
}

