/*What is Relationship-populate/Populate in Mongodb :-In MongoDB, "relationship-populate" 
refers to the process of filling in referenced documents within a query result. This is 
particularly useful in applications where data is normalized, meaning related data is 
stored in separate collections. By using the populate function, you can join documents 
from different collections and get a more complete data set in a single query.

=> This concept is particularly used in Mongoose, an ODM (Object Data Modeling) library 
for MongoDB and Node.js
*/

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/relationships");

app.use(require("./routes/route"));

app.listen(3000, () => console.log("Server on!"));
