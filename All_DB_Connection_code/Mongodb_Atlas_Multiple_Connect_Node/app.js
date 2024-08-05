const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://najim:1234@firstcluster.4rc4s.mongodb.net/pets?retryWrites=true&w=majority"
); //This code is own Mongoose Atles code past and then working

const Atlasdb = require("./models/userModel");

async function insert() {
  await Atlasdb.create({
    name: "Ajit kumar",
    email: "ajitkumar@gmail.com",
  });
}
insert();

app.listen(3000, function () {
  console.log("Server is running...");
});
