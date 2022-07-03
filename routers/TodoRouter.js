const router = require("express").Router();
const {
  createTodo,
  getTodos,
  updateTodo,
} = require("../controllers/TodoController");

router.post("/createTodo", createTodo);
router.patch("/updateTodo", updateTodo);
router.get("/", getTodos);

module.exports = router;
