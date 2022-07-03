const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todoRouter = require("./routers/TodoRouter");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRouter);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("System is working..");
});
