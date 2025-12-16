import mongoose from 'mongoose'

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Mern-Note-App");
        console.log('Connected To MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB')
        
    }
};

export default connectToMongoDB;