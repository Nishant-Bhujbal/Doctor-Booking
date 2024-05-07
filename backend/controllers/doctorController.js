import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";


export const updateDoctor = async(req,res)=>{
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body},{new : true})

        res.status(200).json({message : "sucessfully Doctor updated",success : true, data : updatedDoctor})
    } catch (error) {
        res.status(500).json({message : "faield to update Doctor",success : false})
    }
}

export const deleteDoctor = async(req,res)=>{
    const id = req.params.id;

    try {
        await Doctor.findByIdAndDelete(id)

        res.status(200).json({message : "sucessfully Doctor deleted",success : true})
    } catch (error) {
        res.status(500).json({message : "faield to delete Doctor",success : false})
    }
}

export const getSingleDoctor = async(req,res)=>{
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id).populate('reviews').select("-password")

        res.status(200).json({message : "sucessfully found Doctor",success : true,data : doctor})
    } catch (error) {
        res.status(404).json({message : "faield to find Doctor",success : false})
    }
}

export const getAllDoctor = async(req,res)=>{
   
    try {

        const {query} = req.query;
        let doctor;

        if(query){
            doctor = await Doctor.find({
                isApproved : "approved",
                $or : [
                    {name : {$regex : query, $options : "i"}},
                    {specialization : {$regex : query, $options : "i"}}
                ]
            }).select("-password")
        }
        else{
            doctor = await Doctor.find({isApproved : "approved"}).select("-password")
        }


        res.status(200).json({message : "sucessfully found all Doctor",success : true,data : doctor})
    } catch (error) {
        res.status(500).json({message : "faield to find all Doctor",success : false})
    }
}


export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.userId
    
    try {
        const doctor = await Doctor.findById(doctorId);

        if(!doctor){
            return res.status(404).json({message : "Doctor not found",success : false})
        }

        const {password,...rest} = doctor._doc;
        const appointments = await Booking.find({doctor:doctorId})

        res.status(200).json({message : "Profile info is getting",success : true,data : {...rest,appointments}})
    } catch (error) {
        return res.status(500).json({message : "Something went wrong, cannot get doctor profile",success : false})
    }
}