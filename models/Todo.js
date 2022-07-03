const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  task: String,
  day: String,
  status: String,
});

module.exports = mongoose.model("Todo", schema, "todos");
