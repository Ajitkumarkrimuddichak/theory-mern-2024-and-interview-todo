// Sheryians Coding. socket.io connection/functionality/used in basic
const express = require("express");
const socket = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();

const server = http.createServer(app); //Express ka server or http ka server dono link kiya or dono ko chalayega socket.io ka server.
const io = socket(server); //socket ke server me pass kiya http server ko

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //Static file used kar sakate hai like image,font,video..

app.get("/", (req, res) => {
  res.render("index", { title: "Chess Game" });
});

//Yaha pe frontend se request aayega ,  note:- socket.io backend setup but Not sockit.io tab working karega jab frontend or backend dono jagah seatup hoga
io.on("connection", function (uniquesocket) {
  // callback function
  console.log("connected");

  //(1)
  /*uniquesocket.on("World", function () {
    console.log("World recived");//Backend me recived kiya  
  });*/

  //(2)
  /*uniquesocket.on("World", function () {
    io.emit("Sab ke Pass data lejao");//backend se sabhi , frontend ko data bheja hai
  });*/

  //(3)
  /*uniquesocket.on("disconnect", function () {
    console.log("disconnect"); //jaise hi browser band kiya kisi bhi tarah se backend or frontend ka connection tutane se just pahale one event bhejata hai socket.io jise disconnect kahate hai.
  });*/
});

server.listen(3000, function () {
  console.log("Listening on port 3000");
});
