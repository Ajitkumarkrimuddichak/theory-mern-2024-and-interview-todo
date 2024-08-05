var mysql = require("mysql2");
const config = require("./bd.js");
require("dotenv").config();

for (let i = 0; i < config.databases.length; ++i) {
  //Store the database connection in our db object

  var connection = mysql.createConnection({
    host: config.databases[i].host,
    user: config.databases[i].username,
    password: config.databases[i].password,
    database: config.databases[i].database,
  });

  connection.connect((err) => {
    if (err) throw err;
    connection.query(
      `SELECT * FROM ${config.databases[i].database}.users`,
      function (err, rows, fields) {
        console.log(rows);
      }
    );
  });
}
