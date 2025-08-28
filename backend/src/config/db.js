import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //await mongoose.connect('mongodb+srv://walaatarek59:ZFAMQZE6ueSOL5a4@cluster0.saxfyay.mongodb.net/food-delivery');
    await mongoose.connect('mongodb://localhost:27017/food-delivery');
    console.log(" MongoDB connected successfully!");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
