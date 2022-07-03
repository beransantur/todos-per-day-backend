const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  const newTodo = {
    task: req.body.task,
    day: req.body.selectedDay,
    status: "alive",
  };
  const createdTodo = await Todo.create(newTodo);
  console.log("Created todo", createdTodo);
  res.json(createdTodo);
};

const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};

const updateTodo = async (req, res) => {
  const newTodo = req.body;

  //previos todo
  const updatedTodo = await Todo.findByIdAndUpdate(req.body._id, newTodo);
  res.json(newTodo);
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
};
