import express from "express";
const router = express.Router();
import {
  allStudent,
  deleteStudent,
} from "../Controller_ch5/studentController.js";

router.get("/all", allStudent);

router.get("/delete/:id([0-9]{2})", deleteStudent);

export default router;
