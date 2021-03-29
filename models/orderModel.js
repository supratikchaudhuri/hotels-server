import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    }],
    billingDetails: {
        fullName: {type: String, required: true},
        address: {type: String, required: true},
        requirements: {type: String},
    },
    paymentMethod: {type: String, required: true},
    itemsPrice: {type: Number, required: true},
    convineincePrice: {type: Number, required: true},
    taxPrice: {type: Number, required: true},
    totalPrice: {type: Number, required: true},

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isPaid: {type: Boolean, default: false},
    paidAt: {type: Date}, 
}, {
    timeStamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;