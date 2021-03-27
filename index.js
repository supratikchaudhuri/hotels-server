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
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/hotels', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello from Server");
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

//errors wrapped in expressAsyncHandler will be sent here
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`server running on port: ${PORT}`)})

