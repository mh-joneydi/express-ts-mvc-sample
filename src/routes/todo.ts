import express from 'express'
import TodoController from '../controllers/todo';

const todoRouter = express.Router();

todoRouter.post("/add-todo", TodoController.addTodo);
todoRouter.get("/delete-todo/:id", TodoController.deleteTodo);
todoRouter.get("/completed-todo/:id", TodoController.completeTodo);

export default todoRouter;