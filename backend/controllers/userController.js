import User from "../models/UserSchema.js";
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const updateUser = async(req,res)=>{
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new : true})

        res.status(200).json({message : "sucessfully user updated",success : true, data : updatedUser})
    } catch (error) {
        res.status(500).json({message : "faield to update user",success : false})
    }
}

export const deleteUser = async(req,res)=>{
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({message : "sucessfully user deleted",success : true})
    } catch (error) {
        res.status(500).json({message : "faield to delete user",success : false})
    }
}

export const getSingleUser = async(req,res)=>{
    const id = req.params.id;

    try {
        const users = await User.findById(id).select("-password")

        res.status(200).json({message : "sucessfully found user",success : true, data : users})
    } catch (error) {
        res.status(404).json({message : "faield to find user",success : false})
    }
}

export const getAllUser = async(req,res)=>{
    const id = req.params.id;

    try {
        const user = await User.find({}).select("-password")

        res.status(200).json({message : "sucessfully found all user",success : true,data : user})
    } catch (error) {
        res.status(500).json({message : "faield to find all user",success : false})
    }
}


export const getUserProfile = async (req,res)=>{
    const userId = req.userId
    
    try {
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({message : "User not found",success : false})
        }

        const {password,...rest} = user._doc;

        res.status(200).json({message : "Profile info is getting",success : true,data : {...rest}})
    } catch (error) {
        return res.status(500).json({message : "Something went wrong, cannot get profile",success : false})
    }
}


export const getMyAppointments = async (req,res)=>{
    try {
        // step1 : retrieve appointments from booking  for specific user
        const bookings = await Booking.find({user : req.userId})
        
        // step2 : extract doctor ids from the appointments
        const doctorIds = bookings.map(el=>el.doctor.id)
        
        //step3 retrieve doctors using doctor ids
        const doctors = await Doctor.find({_id : {$in:doctorIds}}).select("-password")

        res.status(200).json({message : "Appointments are coming",success : true,data : doctors})
    } catch (error) {
        return res.status(500).json({message : "Something went wrong, cannot get appointments",success : false})
    }
}