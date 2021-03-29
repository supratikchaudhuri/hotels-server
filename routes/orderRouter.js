import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

import {isAuth} from "../utils.js"

const orderRouter = express.Router();
//has middleware
orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler( async(req, res) => {
        if(req.body.orderItems.length === 0) {
            res.status(400).send({message: 'Cart is Empty'})
        }
        else {
            const order = new Order({
                orderItems: req.body.orderItems,
                billingDetails: req.body.billingDetails,
                paymentMethod: req.body.paymentMethod,
                itemsPrice: req.body.itemsPrice,
                convineincePrice: req.body.convineincePrice,
                taxPrice: req.body.taxPrice,
                totalPrice: req.body.totalPrice,
                user: req.user._id
            });
            const createdOrder = await order.save();
            
            res.status(201).send({message: 'New Order Placed', order: createdOrder});
        }
    }
));

export default orderRouter;