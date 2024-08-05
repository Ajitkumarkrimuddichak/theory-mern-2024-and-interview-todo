import express from "express";
import connectDB from "./db/connectdb.js";
import {
  deleteDocById,
  deleteOneDoc,
  deleteOneDocByAge,
  deleteManyDoc,
} from "./models/Student.js";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

deleteDocById("64107900685a60f514926db5");
// deleteOneDoc("617976937c6e82abf434d2bd");
// deleteOneDocByAge(27);
//deleteManyDoc(27);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
