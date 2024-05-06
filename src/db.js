import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
        mongoose.connect('mongodb://localhost/merndb');
        console.log('Connection sucessfully')
    } catch (error) {
        console.log(error);
    }
}