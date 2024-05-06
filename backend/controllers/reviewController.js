import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'


export const getAllReviews = async(req,res) =>{
    try {
        const review = await Review.find({});

        res.status(200).json({message : "successfully got all reviews",success : true,data : review})
    } catch (error) {
        res.status(404).json({message : "reviews not found",success : false})
    }
};


export const createReview = async(req,res)=>{
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push : {reviews : savedReview._id}
        })

        res.status(200).json({message : "review submited successfully",success : true,data : savedReview})
    } catch (error) {
        res.status(500).json({message : error.message + "kuch to chuda hai",success : false})
    }
}



