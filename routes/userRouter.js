import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import { generateToken, isAdmin, isAuth } from "../utils.js";

const userRouter = express.Router(data.users);

userRouter.get("/seed", expressAsyncHandler( async (req, res)=> {
    await User.deleteMany({});

    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers})
}))

userRouter.post('/signin', expressAsyncHandler(async(req, res) => {
    const user = await User.findOne({email: req.body.email})

    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email, 
                isAdmin: user.isAdmin,
                isSeller: user.isSeller,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid user email/password'})
}))

userRouter.post("/register", expressAsyncHandler(async(req, res) => {
    const newUser = new User({
        name : req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await newUser.save();
    
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email, 
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    })
}));

userRouter.get(
    "/:id",
    expressAsyncHandler(async(req, res) => {
        const user = await User.findById(req.params.id);
        if(user) {
            res.send(user)
        }
        else {
            res.send({message: 'User does not exists.'})
        }
    })    
)

userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = await User.findById(req.user._id);
        if(user) {
            user.name = req.body.name || user.name;
            if(req.body.password)
            user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
       
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser),
        })
    })
)

userRouter.get(
    '/',
    isAuth, isAdmin, 
    expressAsyncHandler(async(req, res) => {
        const users = await User.find({});
        res.send(users)
}))

userRouter.delete(
    '/:id',
    isAuth, isAdmin, 
    expressAsyncHandler(async(req, res) => {
        const user = await User.findById(req.params.id);
        if(user) {
            if(user.isAdmin) {
                res.status(400).send({message: "Cannot Delete Admin User"});
                return;
            }
            const deletedUser = await user.remove();
            res.send({message: "User is Deleted."})
        } else {
            res.status(404).send({message: "User does not exists"})
        }
}))

userRouter.put(
    '/:id/edit',
    isAuth, isAdmin,
    expressAsyncHandler(async(req, res) => {
        const user = await User.findById(req.body.user);
        if(user) {
            user.isSeller = req.body.user.isSeller;
            user.isAdmin = req.body.user.isAdmin;
            const updatedUser = await user.save()
            res.send({message: "User Privilages Updated"})
        } else {
            res.status(404).send({message: 'User Not Found'})
        }
    })
)

export default userRouter

