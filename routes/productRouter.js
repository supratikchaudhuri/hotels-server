import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router(data.products);

productRouter.get('/', expressAsyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.send(products);
}))

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    await Product.deleteMany({});

    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts})
}))

//this is last cuz otherwise seed will act as :id
productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(product)
        res.send(product);
    else
        res.status(404).send({message : 'Product not found.'})
}))

productRouter.get('/seller-listings/:id', expressAsyncHandler(async(req, res) => {
    const product = await Product.find({sellerId: req.params.id});

    if(product)
        res.send(product);
    else
        res.status(404).send({message : 'Product by seller not found.'})
}))

export default productRouter;