import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//Ber-Ber used karana hai to seprate banaya hai // seprate method me dal diya hai
// step 5 access and referesh token
const generateAccessAndRefereshTokens = async (userId) => {
  //userId kaise milega //niche sab check kar liya hai // "user" se milega
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken(); //method hai () add karana hi hoga
    const refreshToken = user.generateRefreshToken(); //method hai () add karana hi hoga
    //access token to user ko de dete hai lekin refresh token ko data base me bhi save karate hai taki ber-ber password na puchhna pare user se

    user.refreshToken = refreshToken; // Refresh Token ko database me dala hai
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "") //some method me check kar sakate ho or return me true or false dega
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;

  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // req body ->pura data lana
  // username or email hai ya nahi hai check karana hai kis bes pe user ko access dena hai or login kara sakate ho
  // find the user base ki request body me aa raha hai ki nahi aaraha hai user ko to find karana parega ki hai ki nahi hai//user mil jane ke bad
  // password check // Login hai to password check karao//password check hone ke bad
  // access and referesh token// dono generate karana hoga or user ko dono bhejana parega
  // send cookie //or one response bhej do ki succefully login

  //step 1
  const { email, username, password } = req.body;
  console.log(email);

  if (!username && !email) {
    throw new ApiError(400, "username or email is required");
  }

  // Here is an alternative of above code based on logic discussed in video:
  // if (!(username || email)) {
  //     throw new ApiError(400, "username or email is required")
  // }

  //step 2
  const user = await User.findOne({
    //findOne ko jaise hi pahala "document/entery" mil jayega vah return kar deta hai
    $or: [{ username }, { email }], //Advance Logick hai Dono me se koi dhur do // query likhana isi ko bolate hai
  }); //$or mongdb ke operator hai // $or ke andar array ke andar object pass kar sakate ho//$or opertater find karega ki username ke base pe mil jaye ya email ke base pe mil jaye

  //step 3
  if (!user) {
    //kuchh hai hi nahi user ke andar Error throw kar do
    throw new ApiError(404, "User does not exist");
  }

  //step 4 // yah "User" mongoose ka one object hai mongoose ke thru jo method available hai oh Ex :- findOne ,updateOne mongoose ke thrue available hai
  const isPasswordValid = await user.isPasswordCorrect(password); // jo aap ne methods banaye hai na Ex:- isPasswordCurrect,generateAccessToken yesab aapake "user" me available hai

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  //step 5 access and referesh token
  //upar generate kiya hai / yaha pe call kiya hai
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  //step 6 // yaha pe two sutuation hai ki 1) Database ko dubara call karana joki kiye hai 2) previs object ko update kar do
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  ); //optional step hai

  //Hame bhejana hai cookies
  const options = {
    //hame kuchh option designed karani parati hai
    httpOnly: true, //isase kya hota hai ki aapake cookies ko koi bhi modified kar sakata hai frontend pe
    secure: true, //but httpOnly:true or secure: true kar dene se siraf-or-siraf server se modified ho sakata hai//frontend se modified nahi kar sakate hai
  };

  //is method se return karana hai one response
  return res
    .status(200)
    .cookie("accessToken", accessToken, options) //aap jitana chahe cookies set kar sakate hai
    .cookie("refreshToken", refreshToken, options) // key:vale Ex:- "accessToken", accessToken
    .json(
      new ApiResponse(
        200,
        {
          //ApiResponse file me jo this.data = data // yaha se jo bhej rahe hai {} ke andar vah pura data hai
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  // sabase pahale to dimag me aana chahiye ki user logout pe click kare to logout kase karu
  // Clear cookies
  // Both Clear accessToken and refreshToken

  /* Note:- middleware ka kya matalb tha jane se pahale mil ke jana same oh concept used kar sakate hai
     Ex:- hamane used kiya tha multer ki form ka Data to ja raha hai sath me image bhi lete jana apane sath me 
     to isi tarah ka ham aapana bhi middleware designed kar sakate hai gaur se dekhoge to reques or response hai kya 
     ye one object hi to hai is object ke anadar cookie add hogaya,file add hogaya// to ham khud ka bhi to add kar sakate hai
    third pati ka jarurat nahi hai mai khud ka middleware designed kar sakate hai    
    res.cookie aap bol paye kyo ki one object add kar diya // req me bhi aap cookies access kar sakate ho kyo ki aap cookies middleware add kar diya mai aapana bhi middleware add kar sakate hai
    */
  await User.findByIdAndUpdate(
    //two method used kar sakate hai 1)findById used karane se fir se user lana parega fir usaka refresh token delete karna parega fir save karana parega 2)findByIdAndUpdate(isake andar query batao user ko find kaise karana hai,{update karana kya hai//update karate samay mongodb ka operator used karana parata hai})
    //is method ke pass to user ka access to nahi hai // but login ke pass to tha Ex: email,username,password
    req.user._id,
    {
      //yaha pe middleware used kar sakate hai
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      //or option milata hai
      new: true, //jo return me response  milata usame new updated value milega
    }
  ); //refresh token to Data base se gayab hogaya

  const options = {
    // cookie vala kam kar rahe hai
    httpOnly: true,
    secure: true,
  };

  //clear Cookies
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

export { registerUser, loginUser, logoutUser };
