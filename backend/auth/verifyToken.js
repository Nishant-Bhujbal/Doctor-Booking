import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate = async(req,res,next)=>{
    
    const authToken = req.headers.authorization

    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({message : "no token, authorizaton denied",success : false})

    }

    try {
        const token = authToken.split(' ')[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET_Key)

        req.userId = decoded.id
        req.role = decoded.role 

        next();
    } catch (error) {
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({message : "token is expired",success : false})
        }
        
        return res.status(401).json({message : "invalid token",success : false})

    }
};


export const restrict = roles => async(req,res,next)=>{
    const userId = req.userId;

    let user = null;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user = patient
    }

    if(doctor){
        user = doctor
    }

    if(!roles.includes(user.role)){
        return res.status(404).json({message : "you are not authorized",success : false})
    }

    next();
}   