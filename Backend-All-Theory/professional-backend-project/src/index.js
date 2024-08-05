//require('dotenv').config({path:'./env'})
//(or)
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

// Joki db me hai //promice bhi return karata call yaha se ho raha hai to promise bhi yahi return hoga
connectDB()
  .then(() => {
    //utile app server start hoga
    app
      .listen(process.env.PORT || 8000, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      })
      .on("error", (error) => {
        //on() Method specifying a callback function to be executed whenever the specified event occurs.
        console.error("Server ERROR:", error);
        throw error;
      }); //hamane likh code
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });

/* (or)
import express from 'express';
const app = express()
( async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
       console.log("ERROR:",error)
       throw error 
    }
})()*/
