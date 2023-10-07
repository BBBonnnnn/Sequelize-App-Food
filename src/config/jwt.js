import jwt from 'jsonwebtoken';


const createToken = (data)=>{
    let token =jwt.sign({data},"KHANGTRUONG",{algorithm:"HS256",expiresIn:"3y"});

    return token;
}


const checkToken = (token)=>{
    return jwt.verify(token,"KHANGTRUONG");
}


const decodeToken = (token)=>{
    return jwt.decode(token);
}

export {
    createToken,
    checkToken,
    decodeToken
}