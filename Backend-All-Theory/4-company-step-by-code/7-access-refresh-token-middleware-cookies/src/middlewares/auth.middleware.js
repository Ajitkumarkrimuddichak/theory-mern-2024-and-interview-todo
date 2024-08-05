import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

/* Note:- verify JWT kyo karana hai JWT  kyo ki jab aap user ko login karaya to aap accessToken or refreshToken de diye to inahi ke besis pe to user ko verifay karunga ki aapake pass sahi token hai ki nahi hai vahi to // True Login hai
 to mai kya  karunga ki "req.body  ke anadar yek new object add kar dunga" 
*/
export const verifyJWT = asyncHandler(async (req, _, next) => {
  //res ko used me nahi le rahe hai to _ likh sakate hai
  try {
    // token ka access kaise loge // req ke pass cookies ka access hai//cookies ka access aaya kaise aap ne hi to diya meddileware ka used kar ke "app.use(cookieParser)"
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", ""); //kon sa cookies chahiye "accessToken" ka
    // accessToken nahi hai to kya karo ho sakata hai yaha se nahi aaraha ho //
    // user yek custome header bhej raha ho aapako to usako bhi check kar lete hai header yek method hota hai jo ki avalibal hota hai jobhi header ka name ho used kar lijiye akasar jo header ka name hota hai vah "Authorization"
    // postman open karo to kya hota hai ki aap header ke andar one key bhejate ho// kaisi key bhejate ho isaka name likhate ho Authorization ke bad value bhejate ho "Bearer <access Token Name>"
    // console.log(token);
    if (!token) {
      //nahi hai token to Error karo
      throw new ApiError(401, "Unauthorized request");
    }

    //vapas se hame information leni paregi or decode karana hoga//verify karane ke liye kuchh provide karana hoga
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); //decode vahi kar payega jisake pass sikaret hoga

    //yek bar Database request mare hai // decodedToken hai to mil jayega or jo _id hai vah generateAccessToken ke anadar model banaya tha vaha pe _id rakha tha // se aaya hai
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    //100% check ho gya hai ki user hai // to kya kare mere pass access hai "req" ka to ham is req ke andar yek new object add kar denge
    //ab ise kam me lena hai//middleware bana liya hai or export bhi kar diya hai magar middleware used kaise aate hai mejarali used route me aate hai
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
