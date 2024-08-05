import express from "express";
import connectDB from "./db/connectdb.js";
import {
  updateDocById,
  updateoneDoc,
  updateOneDocByAge,
  updateManyDoc,
} from "./models/Student.js";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

//updateDocById("64107900685a60f514926db5");
//updateoneDoc("64107900685a60f514926db5");
//updateOneDocByAge(27);
updateManyDoc(27);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
