import mongoose from "mongoose";

const connectDB = async () => {
  try {
        await mongoose.connect(process.env.MONGO_URI|| "mongodb+srv://abhiee8898_db_user:kXdBYciBEVP6Oqhr@cluster0.nyx07mp.mongodb.net/env");

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("MongoDB Error ❌", error.message);
    process.exit(1);
  }
};

export default connectDB;