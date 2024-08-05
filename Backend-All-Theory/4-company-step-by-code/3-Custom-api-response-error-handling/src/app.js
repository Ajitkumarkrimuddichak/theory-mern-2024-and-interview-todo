import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//ye sare configuration app banane ke bad hota hai
app.use(
  cors({
    //ye use method sare ke sare middleware/configuration ke kam aate hai
    origin: process.env.CROS_ORIGIN, //kon kon sa origin allow kar rahe ho
    credentials: true, // or bhi option milate hai Documentation reading
  })
);

//cookie se pahale kuchh setting karana hoga // Data kai jagah se aane vala hai backend ke andar Ex- url,json,kuchh request Body me aayega,to kuchh ka direct from aayega to kuchh setting lagati hai
//itana data from bhara to liya hai //configuration kiya hai
app.use(express.json({ limit: "16kb" })); //express ke sath json ko accept kar raha hu // isake andar bhi multiple option milate hai Ex:-limit Express ka document reading

// dusara configuration karana yah hai ki url se Data aaye
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//thisara configuration// sabhi express ka configuration hai
app.use(express.static("public")); //kai bar file folder store karana chahate hai Ex:-pdf,image mere hi public server me store hoga

//cookieParser:- kam itana sa hai mere server se user ka browse hai na usake andar ka cookie access kar pau or usaki cookie set bhi kar pau // to fir CRUD operation kar pau
app.use(cookieParser()); //isake andar bhi option hota hai

export { app };
