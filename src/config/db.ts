import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // If the database is already connected, don't connect again

  if (connected) {
    console.log("mongoDB is already connected.....");
    return;
  }
  // Connect to MongoDB
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("mongo url not defined");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("mongoDB is connected.....");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
