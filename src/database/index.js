import mongoose from "mongoose";

const connectDb = async ()=>{
    mongoose.connect('mongodb+srv:').then(()=>
        console.log('Database connected successfully!')
    ).catch((e)=>console.log(e))
};
export default connectDb;
