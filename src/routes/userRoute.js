import express from 'express'
import { orderFood } from '../controllers/userController.js';


const userRoute =express.Router();

// API like và bỏ like
userRoute.post("/order-food",orderFood);



export default userRoute