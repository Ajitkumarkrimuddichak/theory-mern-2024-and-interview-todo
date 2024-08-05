// const express = require('express')
import express from "express";
const app = express();
const port = process.env.PORT || "3000";
import valueReciveRoure from "./ControlleRoutes_ch5/student.js";

app.use("/student", valueReciveRoure);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
