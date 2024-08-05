import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    ); //mongoose one return Object deta hai jo ki kisi bhi variable me store kar sakaate hai.
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    //console.log(connectionInstance) // kya kya milta hai sabhi milata hai jo dekhana jaruri hai
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1); // NodeJs deta hai process ka kahi pe bhi used kar sakate hai//process kya hai na ye jo current application  chal rahi hai na yha yek na yek process pe chal rahi hogi ye usaka reference hai//process ko exit kara sakate ho jo ki method hai exit me alag-alag or bhi hote hai  //ise import karane ka jarurt nahi hai
  }
};

export default connectDB;
