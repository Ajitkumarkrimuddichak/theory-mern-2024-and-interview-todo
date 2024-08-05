//require('dotenv).config({path:'./env'})
//or
import dotenv from "dotenv"; //package.json me kuchh add karana parata hai to import vala syntex working
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
first aproach hai
//index.js file me nahi likha jata hai comapny me isake liye separate folder and file use kiya jata hai
import mongoose from "mongoose";
import {DB_NAME} from "./constants";

import express from "express";
const app = express();

(async () => {
    try{//database connection code
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error) => {//kai event ko access kar sakata hai //Express ka part hai//database to connect ho gaya hai but kya pata jo express app hai jo bat nahi kar pa raha hai bahut sara resion ho sakata hai kai bar profinacial code me is tarah ka scenario handle kiya jata hai 
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=> {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
   
      
    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})()*/
