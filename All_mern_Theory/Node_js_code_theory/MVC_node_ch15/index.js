const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mukulnode");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const employee = require("./controllers/employeeController");
app.set('view engine','ejs');
app.set("views", "./views");

app.get('/register',function(req,res){
    res.render("register");
});
app.post('/register',employee.insertEmployee);
app.listen(8000,function(){
    console.log("Server is Running....");
})