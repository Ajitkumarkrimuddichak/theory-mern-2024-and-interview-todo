const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
app.set("view engine", "ejs");

const connection = require("./config/db");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

//final update
app.post("/final-update", (req, res) => {
  const id_data = req.body.hidden_id;
  const name_data = req.body.name;
  const email_data = req.body.email;

  console.log("id...", req.body.name, id_data);

  const updateData = "update you_table set name=?, email=? where id=?";

  connection.query(
    updateData,
    [name_data, email_data, id_data],
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/data");
      }
    }
  );
});

//passing data to update page
app.get("/update-data", (req, res) => {
  const updateData = "select * from  you_table where id=?";
  connection.query(updateData, req.query.id, (err, eachRow) => {
    if (err) {
      res.send(err);
    } else {
      console.log(eachRow[0]);
      result = JSON.parse(JSON.stringify(eachRow[0])); //in case if it dint work
      res.render("Edit.ejs", { data: eachRow[0] });
    }
  });
});

//delete
app.get("/delete-data", (req, res) => {
  const deleteData = "delete from you_table where id=?";
  connection.query(deleteData, [req.query.id], (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/data");
    }
  });
});

//read operation which will be passing value to ejs engine
app.get("/data", (req, res) => {
  const allData = "select * from you_table";
  connection.query(allData, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      // res.json({ rows });
      res.render("read.ejs", { rows }); // redering read.ejs file along with data
    }
  });
});

//create
app.post("/create", (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  try {
    connection.query(
      "INSERT into you_table (name,email) values(?,?)", //2. saving in database
      [name, email],
      (err, rows) => {
        if (err) {
          console.log(err);
        } else {
          // res.json({ result });
          res.redirect("/data"); //3. Redirect user to the new page
        }
      }
    );
  } catch (err) {
    res.send(err);
  }
});

app.listen(process.env.PORT || 4000, (error) => {
  if (error) throw error;
  console.log(`Server Running at ${process.env.PORT}`);
});
