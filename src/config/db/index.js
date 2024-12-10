import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

const connectDB = async()=>{
    try {
        console.log("process env=>",process.env.MONGODB_URI)
        console.log("DB_name=>", DB_NAME)
        const connection=   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //    console.log("mongodb Connected=>", connection); 
    } catch (error) {
        console.log("Mongodb connection error ", error);
        throw error
    }
}

export default connectDB;