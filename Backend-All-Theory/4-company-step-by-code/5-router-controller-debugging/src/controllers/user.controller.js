import { asyncHandler } from "../utils/asyncHandler.js";

//Is Method ka itana sa kam hai ki user ko register karega
const registerUser = asyncHandler(async (req, res) => {
  //heigher order function ke andar yek function call ho raha hai
  res.status(200).json({
    message: "ok",
  });
});

export { registerUser };
