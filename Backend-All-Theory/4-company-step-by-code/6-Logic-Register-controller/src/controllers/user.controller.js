import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //Steps flow and Logic bulding/Algorithm designe
  //1) get user details from frontend
  //2) validation - not empty
  //3) check if user already exists: username, email
  //4) check for images, check for avatar
  //5) upload them to cloudinary, avatar
  //6) create user object - create entry in db
  //7) remove password and refresh token field from response
  //8) check for user creation
  //9) return res

  //step 1 Note:- req.body by default Express ne dediya hai
  const { fullName, email, username, password } = req.body; //frontent se data to bahut sara way hai Ex: body,url,parmase..
  //console.log("email: ", email);

  //step 2 sabhi ko one time me check kiya hai // chahe to one by one check  kar sakate hai
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "") //some method me check kar sakate ho or return me true or false dega
  ) {
    throw new ApiError(400, "All fields are required");
  } //validation check ka alag se seprate file hoti hai or methods call kar lete hai

  //step 3
  const existedUser = await User.findOne({
    // Gole yah hai ki User mere pas hai //database se puchhna na hai ki aap mujhe find kar ke batao yesa yek user jo ki step one se match karata ho
    $or: [{ username }, { email }], //findOne one method hai jo pahala jobhi user find hoga to oh return kar dega
  }); //$ used kar ke bahut sara operator sikh sakate go Ex:-$and,$comment,$not..

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  //console.log(req.files);

  //step 4 // Note:-Multer hame kya deta hai req.files ka access de deta hai
  const avatarLocalPath = req.files?.avatar[0]?.path; //hamane abhi tak dekha hai ki req.body ke anadar sara data aata hai//but routes ke anadar jake one middleware add kar diya hai to middleware bhi kuchh access deta hai//middleware kuchh  karata nahi hai khali req ke andar or field add karata hai
  //console.log(avatarLocalPath);
  //hame chahiye avatar kyo ki file ko avatar likha hai isi liye avatar likh hai registerUser me dekhe name kya liya hai//avatar ke pass kafi option hote hai // jo multer ne upload kiya hai vah path mil jayega

  //const coverImageLocalPath = req.files?.coverImage[0]?.path;
  //(or)condition apply kiya coverImage hai to bhi save hoga or nahi hai to bhi save hoga user pe depend karata hai // avatar par bhi condition laga sakate hai
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

  //step 5 upload on Cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  //step 6 Data base me Save hoga
  const user = await User.create({
    //create one method hai jo object leta hai
    fullName,
    avatar: avatar.url, //pura data base me save nahi karana hai only for url
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  //step 7,8
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken" //ye ye field nahi chahiye
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  //step 9
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

export { registerUser };

/*Note:-
In the context of your example req.files?.avatar[0]?.path, let's break it down:
1) req.files: This presumably refers to a property files of an object req.
2) ?.: This is the optional chaining operator. It's placed before the property you want
 to access, indicating that if req.files is null or undefined, the expression will short-circuit and return undefined, preventing an error from occurring.
3) avatar: This is presumably an array or object contained within req.files.
4) [0]: This accesses the first element of the avatar array.
5) ?.: Another optional chaining operator, used before path.
6) path: This presumably is a property of the first element of the avatar array.

7) Putting it all together, req.files?.avatar[0]?.path means "try to access the path property 
of the first element of the avatar array, which is a property of the files object of req, but if any intermediate
step is null or undefined, return undefined instead of throwing an error." This is useful for handling cases where certain
properties might not exist or might be null, without having to manually check each one.


*/
