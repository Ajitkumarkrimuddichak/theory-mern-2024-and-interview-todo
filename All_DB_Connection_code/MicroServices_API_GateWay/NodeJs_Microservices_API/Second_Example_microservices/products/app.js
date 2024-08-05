const express = require("express");
const axios = require("axios");
const PORT = 3002;

const app = express();

app.get("/products", async (req, res) => {
  const userData = await axios.get("http://localhost:3000/users");
  res.send("Message from products service  <br>" + userData.data);
});

app.listen(PORT, () => console.log("Products Service Start"));
