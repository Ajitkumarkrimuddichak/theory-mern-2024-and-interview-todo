import { Router } from "express"; //Router Express hi dega
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

//app.js itana http://localhost:8000//api/v1/users likhane ke bad controlle yaha pe aaya// yaha pe kya kam karana hai // agar yaha pe sahi se route likha hai ki /register pe jana hai to registerUser method call hoga
router.route("/register").post(registerUser);

export default router;
