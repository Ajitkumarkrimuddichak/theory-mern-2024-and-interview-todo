const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connection Success Full");
});
module.exports = connection;
