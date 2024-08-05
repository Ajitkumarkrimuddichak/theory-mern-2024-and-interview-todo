const express = require("express");
const PORT = 3001;

const app = express();

app.get("/order", (req, res) => {
  res.send("Message from order service");
});

app.get("/order/me", (req, res) => {
  res.send("Message from order Me service");
});

app.listen(PORT, () => console.log("Order Service Start"));
