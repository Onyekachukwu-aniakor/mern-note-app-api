import mongoose from 'mongoose'

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://Onyekachukwu:Carlos.042@cluster0.4kaqz2b.mongodb.net/Mern-Note-App?appName=Cluster0");
        console.log('Connected To MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB')
        
    }
};

export default connectToMongoDB;