import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    //Middleware/configuration ke kam me aata hai.
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Data multiple jagah se aane vala hai Backend me. url,json,request form,direct form se data aayega.
app.use(express.json({ limit: "16kb" })); //yaha json ko accept kar rahe hai or kitana limite access karana chahate hai.
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); //HTTP request logger middleware for node.js

//routes import
import userRoutes from "./routes/user.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import videoRouter from "./routes/video.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

//routes declaration //http://localhost:8000/api/v1/users/login
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/tweets", tweetRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/dashboard", dashboardRouter);

export { app };
