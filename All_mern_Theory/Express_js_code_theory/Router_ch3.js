// const express = require('express')
// const stu = require('./routes/student.js')
// const tea = require('./routes/teacher.js')

import express from "express";
import stu from "./Routes_ch3/student.js";
import teacher from "./Routes_ch3/teacher.js";

const app = express();
const port = process.env.PORT || "3300";

// Load Router Modules
app.use("/student", stu);
app.use("/teacher", teacher);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
