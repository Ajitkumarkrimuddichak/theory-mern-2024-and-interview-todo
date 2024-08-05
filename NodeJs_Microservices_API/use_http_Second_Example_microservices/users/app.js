const express = require("express");
const PORT = 3000;

const app = express();

app.get("/users", (req, res) => {
  res.send("Message from user service");
});

app.listen(PORT, () => console.log("User Service Start"));
