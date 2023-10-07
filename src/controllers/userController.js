import { decodeToken } from '../config/jwt.js';
import sequelize from '../models/connect.js'
import initModels from "../models/init-models.js";

const model = initModels(sequelize);




const orderFood = async (req, res) => {
    let { foodId, token,amount,code,arrSubId} = req.body;
    let userInfo = decodeToken(token);
    // testUserInfofake = {
    //     "data": {
    //       "user_id": "10",
    //       "full_name": "Liam Hernandez"
    //     },
    //     "iat": 1696652910,
    //     "exp": 1791325710
    //   }
        await model.orders.create({
            food_id: foodId,
            user_id: userInfo.data.user_id,
            amount:amount,
            code:code,
            arr_sub_id:arrSubId
        })
    


    res.send("thêm order thành công!!!")

}

export {orderFood}