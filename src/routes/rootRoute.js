import express from 'express'
import restaurantRoute from './restaurantRoute.js';
import userRoute from './userRoute.js';



const rootRoute = express.Router();

rootRoute.use("/restaurant",restaurantRoute);
rootRoute.use("/user",userRoute);

export default rootRoute