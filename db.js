import mongoose from "mongoose";

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//Connect to db
export const connectDB = async () => {
    try { 
        await mongoose.connect('mongodb://localhost:27017/auctioncli');
        console.log('MongoDB connect');
    }catch (err) {
        console.error('Connection error:', err);
        process.exit(1);
    }
};