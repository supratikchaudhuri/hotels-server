import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

import {isAuth} from "../utils.js"

const orderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth,//middleware
    expressAsyncHandler(async(req, res) => {
    if(req.body.orderItems.length === 0) {
        res.status(400).send({message: 'Cart is Empty'})
    }
    else {
        const order = new Order({
            orderItems: req.body.orderItems,
            billingAddress: req.body.billingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,

            user: req.user._id
        });
        const createdOrder = await order.save();
        req.status(201).send({message: 'New Order Placed', order: createdOrder});
    }
}));

export default orderRouter;