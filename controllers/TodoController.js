const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  const newTodo = {
    task: req.body.task,
    day: req.body.day,
    status: "alive",
  };
  const createdTodo = await Todo.create(newTodo);
  res.json(createdTodo);
};

const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};

module.exports = {
  createTodo,
  getTodos,
};
