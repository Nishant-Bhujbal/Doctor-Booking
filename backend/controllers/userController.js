import User from "../models/UserSchema.js";

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
        const user = await User.findById(id).select("-password")

        res.status(200).json({message : "sucessfully found user",success : true,data : user})
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