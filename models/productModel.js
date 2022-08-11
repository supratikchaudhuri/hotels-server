import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true,},
    category: { type: String, required: true,},
    address: { type: String, required: true,},
    location: { type: String, required: true,},
    price: { type: Number, required: true,},
    available: { type: Number, required: true,},
    rating: { type: String, required: true,},
    numReviews: { type: Number, required: true,},
    description: { type: String, required: true,},
    sellerId: { type: String, required: true, default: '6214a8d79b885a4914253f25'}
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
export default Product;