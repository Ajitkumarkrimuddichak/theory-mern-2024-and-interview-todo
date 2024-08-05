//1 basic
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// 2 mysql Create database
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
//3 mysql create Table
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
//4 mysql insert into
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var sql =
    "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
