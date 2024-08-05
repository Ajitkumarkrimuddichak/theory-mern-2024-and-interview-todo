import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    // await mongoose.connect(DATABASE_URL);

    const DB_OPTIONS = {
      user: "Ajitkumar", //mongodb file to setting and authentation is possible
      pass: "123456",
      dbName: "schooldb",
      authSource: "schooldb",
    };

    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully..");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
