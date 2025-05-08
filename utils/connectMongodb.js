import mongoose from "mongoose";

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // Removed deprecated options
      serverSelectionTimeoutMS: 10000, 
      socketTimeoutMS: 45000, 
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectMongodb;
