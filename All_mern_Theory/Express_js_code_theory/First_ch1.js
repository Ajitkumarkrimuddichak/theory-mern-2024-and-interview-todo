//const express = require('express');
import express from "express"; //ES6 Syntax only for mension in package.json "type":"module",
const app = express();
const port = 3500;

// app.get('/', (req, res) => {
//   res.send('Hello World Ajit')
// })
app.get("/", function (req, res) {
  res.send("<h1>Hello World mukul kumar</h1>");
});

app.listen(port, () => {
  console.log(`Surver is Running at port Number:-${port}`);
});
