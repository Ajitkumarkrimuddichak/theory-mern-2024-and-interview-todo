import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//Database se to ber-ber bat karane vale hai to yah commen hai to isi liye utils me asyncHandler banaya hai
const connectDB = async () => {
  //isi liye utils me one file banaya hai or usame  Generalized Function banaya or jab bhi excuite karana ho to aap mere method me pass kar dena mai excuite kar ke dedunga
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
