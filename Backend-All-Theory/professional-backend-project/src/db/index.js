import Mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  //asynchronous method jab bhi complete hota hai to yek promice bhi return karata hai
  try {
    const connectionInstance = await Mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    //throw or process same
    console.log("MONGODB Connection FAILED", error);
    process.exit(1); //process kya hai na yek current me kahi na kahi process pe chal rahi hogi. usi ka Referance hai/node.js access deta hai process ka jo kahi pe used kar sakate hai./exit()method hai
  }
};

export default connectDB;
