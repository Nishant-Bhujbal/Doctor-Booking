import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import doctorRoute from './routes/doctor.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 8000

const corsOptions = {
    origin : true
}

app.get('/',(req,res)=>{
    res.send("api is woring")
})

mongoose.set('strictQuery',false);

const connectDb = async() =>{
    try {
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser : true,
            useUnifiedTopology :true
        })

        console.log("mongo db is connected")
    } catch (error) {
        console.log("mongo db is not connected succesfully")
    }
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)


app.listen(port,()=>{
    connectDb()
    console.log("server is running")
})
