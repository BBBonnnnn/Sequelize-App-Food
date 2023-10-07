import { decodeToken } from '../config/jwt.js';
import sequelize from '../models/connect.js'
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const likeRestaurant = async (req, res) => {
    let { resId, token } = req.body;
    let userInfo = decodeToken(token);
    // testUserInfo = {
    //     "data": {
    //       "user_id": "10",
    //       "full_name": "Liam Hernandez"
    //     },
    //     "iat": 1696652910,
    //     "exp": 1791325710
    //   }
    let checkLike = await model.like_res.findAll({
        where: {
            res_id: resId,
            user_id: userInfo.data.user_id,
        }
    })
    if (checkLike.length == 0) {
        await model.like_res.create({
            res_id: resId,
            user_id: userInfo.data.user_id,
            date_like: new Date(),
            dis_like: false
        })
    } else {
        let userLiked = await model.like_res.findOne({
            where: {
                res_id: resId,
                user_id: userInfo.data.user_id,
            }
        });
        let liked = userLiked.dis_like;
        await model.like_res.update(
            { dis_like: !liked },
            {
                where: {
                    res_id: resId,
                    user_id: userInfo.data.user_id,
                }
            })

    }
    res.send("cập nhật like thành công!!!")

};

const unLikeRestaurant = async (req, res) => {
    let { resId, token } = req.body;
    let userInfo = decodeToken(token);
    // testUserInfofake = {
    //     "data": {
    //       "user_id": "10",
    //       "full_name": "Liam Hernandez"
    //     },
    //     "iat": 1696652910,
    //     "exp": 1791325710
    //   }
    let checkLike = await model.like_res.findAll({
        where: {
            res_id: resId,
            user_id: userInfo.data.user_id,
        }
    })

    if (checkLike.length == 0) {
        await model.like_res.create({
            res_id: resId,
            user_id: userInfo.data.user_id,
            date_like: new Date(),
            dis_like: true
        })
    } else {
        let userLiked = await model.like_res.findOne({
            where: {
                res_id: resId,
                user_id: userInfo.data.user_id,
            }
        });
        let liked = userLiked.dis_like;
        await model.like_res.update(
            { dis_like: !liked },
            {
                where: {
                    res_id: resId,
                    user_id: userInfo.data.user_id,
                }
            })

    }


    res.send("cập nhật unlike thành công!!!")

};

const getLikeListByResId = async (req, res) => {
    let { resId } = req.params;
    let data = await model.like_res.findAll({
        where: {
            res_id: resId
        }
    })

    res.send(data);
};

const getLikeListByUserId = async (req, res) => {
    let { userId } = req.params;
    let data = await model.like_res.findAll({
        where: {
            user_id: userId
        }
    })

    res.send(data);
};


const rateRestaurant = async (req, res) => {
    let { resId, token, amount } = req.body;
    let userInfo = decodeToken(token);
    // testUserInfo = {
    //     "data": {
    //       "user_id": "10",
    //       "full_name": "Liam Hernandez"
    //     },
    //     "iat": 1696652910,
    //     "exp": 1791325710
    //   }
    let checkRate = await model.rate_res.findAll({
        where: {
            res_id: resId,
            user_id: userInfo.data.user_id,
        }
    })
    if (checkRate.length == 0) {
        await model.rate_res.create({
            res_id: resId,
            user_id: userInfo.data.user_id,
            date_rate: new Date(),
            amount: amount
        })
    } else {

        await model.rate_res.update(
            {
                amount: amount,
                date_rate: new Date(),
            },
            {
                where: {
                    res_id: resId,
                    user_id: userInfo.data.user_id,
                }
            })

    }
    res.send("cập nhật rate thành công!!!")

};

const getRateListByResId = async (req, res) => {
    let { resId } = req.params;
    let data = await model.rate_res.findAll({
        where: {
            res_id: resId
        }
    })

    res.send(data);
};

const getRateListByUserId = async (req, res) => {
    let { userId } = req.params;
    let data = await model.rate_res.findAll({
        where: {
            user_id: userId
        }
    })

    res.send(data);
};



export {    likeRestaurant, unLikeRestaurant,
            getLikeListByResId, getLikeListByUserId,
            rateRestaurant, getRateListByResId,
            getRateListByUserId
        }