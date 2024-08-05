import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; //jo bhi karane ja rahe ho usase pahale mil ke jana ham se / that is middleware

const router = Router();

router.route("/register").post(
  upload.fields([
    //middleware//upload multer se aaya hai to bahut sara option deta hai //Note:- Single file upload karana hai to upload.single() used karunga //upload.array() bhi nahi laga sakata kyo ki array to yekahi field me multiples files leta hai /yeha pe hame used karana hoga upload.fields([isame two fileds accept kar raha hu])yaha accept karata hai array
    {
      //pahala object me kya le rahe ho
      name: "avatar", //first file jo loge usako kon si name se janoge to mai januga "avatar"
      maxCount: 1, //kitani file accept karo ge
    },
    {
      //dusara object me kya le rahe ho
      name: "coverImage",
      maxCount: 1,
    },
  ]), //isi ko kahate hai middleware inject karana kahate hai
  registerUser
);

export default router;
