import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bycrypt from 'bcryptjs'


const generateToken = user => {
    return jwt.sign({id : user._id,role : user.role},process.env.JWT_SECRET_Key,{
        expiresIn : '15d'
    })
}

export const register = async(req,res)=>{

    const {name,email,password,photo,role,gender} = req.body
    try {

        let user = null

        if(role === 'patient'){
            user =  await User.findOne({email})
        }
        else if(role === 'doctor'){
            user = await Doctor.findOne({email})
        }

        if(user){
            return res.status(400).json({message : "User already exists"})
        }

        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password,salt);

        if(role === 'patient'){
            user = new User({
                name,
                photo,
                email,
                password : hashedPassword,
                gender,
                role
            })
        }
        if(role === 'doctor'){
            user = new Doctor({
                name,
                photo,
                email,
                password : hashedPassword,
                gender,
                role
            })
        }

        await user.save();

        res.status(200).json({message : "Succesful user creation",success : true})
        
    } catch (error) {
        res.status(500).json({message : "internal server error",success : false})
    }
}

export const login = async(req,res)=>{

    const {email} = req.body
    try {
        let user = null;
        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})
        
        if(patient){
            user = patient
        }

        if(doctor){
            user = doctor
        }

        if(!user){
            return res.status(404).json({message : "No user found",success : false})
        }
        
        const isPasswordMatched = await bycrypt.compare(req.body.password,user.password);

        if(!isPasswordMatched){
            return res.status(400).json({message : "Invalid credeantials",success : false})
        }

        const token = generateToken(user);

        const {password,role,appointments,...rest} = user._doc

        res.status(200).json({message : "successfully login",success : true,token,data : {...rest},role})

    } catch (error) {
        return res.status(500).json({message : "Failed to login",success : false})
    }
}

