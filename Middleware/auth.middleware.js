

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../Models/user.schema.js';

dotenv.config();

const authMiddleware = async(req,res,next)=>{

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message:"Token is missing"});
    }

    const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

    try{
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = decoded;

       const user = await User.findById(req.user._id);

       if(!user){
        return res.status(401).json({message:"User not found"});
       }

       // ❌ remove admin-only block
       // if(user.role != 'admin'){
       //   return res.status(401).json({message:'Access Deny'});
       // }

       next();

    } catch(error){
        res.status(401).json({message:'Invalid token'});
    }
}

export default authMiddleware;