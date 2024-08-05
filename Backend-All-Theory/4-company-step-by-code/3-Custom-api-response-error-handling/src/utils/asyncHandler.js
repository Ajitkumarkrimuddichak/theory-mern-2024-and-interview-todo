//Same working First aproach
const asyncHandler = (requestHandler) => {
  //yah one method banayega or  export kar dega
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

//Second Aproach or Higher order function used and Example
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {//yaha pe jo error bhej rahe the kafi bar return karoge error ka koi structure nahi hai mere pass isana jijh to bhejate hi hai to isi liye utils me ApiError or ApiResponse file banate hai jaha used karana hai to karo ber ber likhana nahi parata hai
//         res.status(err.code || 500).json({//Error ko response karana hai to//status ke andar error code bhej dete hai //or json response bhi milata hai joki frontend vale ko asan rahe success flage bhej dete hai
//             success: false,//standerized karate API Error or API Response
//             message: err.message
//         })
//     }//Search Node.js API Error // Document reading
// }
