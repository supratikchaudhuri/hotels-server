import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import dotenv from "dotenv"

import data from "./data.js";

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello from Server");
})

app.get("/api/products", (req, res) => {
    res.send(data.products);
})

app.listen(PORT, () => {console.log(`server running on port: ${PORT}`)})

