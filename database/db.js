import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tayyab123:tayyab.123@filesharing.bwvgvf2.mongodb.net/?retryWrites=true&w=majority&appName=FileSharing",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database is connected successfully");
  } catch (error) {
    console.error("Error while connecting DB", error.message);
  }
};

export default DBConnection;
