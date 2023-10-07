import express from 'express'
import {  getLikeListByResId, likeRestaurant, unLikeRestaurant,getLikeListByUserId, rateRestaurant, getRateListByResId, getRateListByUserId } from '../controllers/restaurantController.js';


const restaurantRoute =express.Router();

// API like và bỏ like
restaurantRoute.post("/like-res",likeRestaurant);
// API unlike và bỏ unlike
restaurantRoute.post("/unlike-res",unLikeRestaurant);
// API lấy danh sách like theo nhà hàng
restaurantRoute.get("/get-like-list-by-resid/:resId",getLikeListByResId);
// API lấy danh sách like theo user
restaurantRoute.get("/get-like-list-by-userid/:userId",getLikeListByUserId);
// API thêm đánh giá nhà hàng
restaurantRoute.post("/rate-res",rateRestaurant);
// API lấy danh sách đánh giá theo nhà hàng
restaurantRoute.get("/get-rate-list-by-resid/:resId",getRateListByResId);
// API lấy danh sách đánh giá theo user
restaurantRoute.get("/get-rate-list-by-userid/:userId",getRateListByUserId);

export default restaurantRoute