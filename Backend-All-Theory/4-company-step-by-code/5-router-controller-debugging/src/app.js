import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
//jaise hi koi user likhega pefixed hojata hai http://localhost:8000/api/v1/users to controle dega userRouter pe ab userRouter jayega user.routes.js file me
app.use("/api/v1/users", userRouter); //router ko separate nikal ke legaye hai to ab router ko lane ke liye Middleware used karana hoga

export { app };
