//Create Country, States, and City Dependencies RestFul APIs In Node JS and MongoDB
// Only for Get data using Node.js Express.js and MongooseDB
// youtub:- Programming Experience
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/multipledb");

const dependencyRoute = require("./routes/dependencyRoute");
app.use("/api", dependencyRoute);

app.listen(4000, function () {
  console.log("Server is running...");
});
