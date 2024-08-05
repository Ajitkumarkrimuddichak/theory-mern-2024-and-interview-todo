//Abhi mujhe chinta yah nahi hai ki data kaise dalunga oh controllers ka kam hai.
// Abhi chinta is bat ka hai ki Todo ke andar jitana bhi data hoga oh Data kaise store karunga.
// Kuch File banate jo defined karega characters  Ex:- Movies, Hero,villain,Hirouni...

//Basic in mongoose :- mongoose model banata hai kaise or export kaise karata hai oh only for Three Line of code
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({}); // Two line likhane se Schema ban jata hai

export const User = mongoose.model("User", userSchema); //jab tak export nahi karenge to schema nahi banata hai. schema banayega Mongodb me
//export const User is liye karate hai ye jo schema banate ho ye aage ja ke kai or file me used kar sake
//har bar aisa nahi hota ki aap schema ko mongodb se hi le ke aate ho. schema inahi file se le ke aate hai isi liye ham used karate hai export const User.

// or yah model jab finally jab connect ho jayega Database se to yah file automatically sabase pahale run ho jata hai or mongodb me one structure create ho jata hai.
//Note:- yah jab Database me jata hai to yah Model "User". convert ho jata hai "users" Plural fome or Lower case me.
