//Data Moduling/Module create
import mongoose from "mongoose"; //mongoose help karata hai schema bananeme.

const userSchema = new mongoose.Schema( //one Schema banaya hai. Schema yek method hai jo one object leta hai.
  {
    //Is object ke andar data rakhate hai
    username: {
      //Isi pura ko Data modelling kahate hai
      //jaise hi aap object defind karate hai to aap mongoose ke super power ko call karate hai./Professional approach
      type: String, //validation Phase
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Schema mongodb me ban jayega. But export karane ke bad hi banta hai
export const User = mongoose.model("User", userSchema); //model yek method hai.ye mehod two parameter leta hai.kya model banau or kisake base pe banau.
//Not :- Jaise hi database me schema "User" jata hai na to vah lower case ho jata hai
