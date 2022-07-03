const router = require("express").Router();
const { createTodo, getTodos } = require("../controllers/TodoController");

router.post("/createTodo", createTodo);
router.get("/", getTodos);

module.exports = router;
