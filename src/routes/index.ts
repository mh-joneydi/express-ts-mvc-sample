import express from 'express'
import path from 'path';
import TodoController from '../controllers/todo';
import rootDirPath from '../utils/rootDirPath';

const filePath = path.join(rootDirPath, "data", "todos.json");
const rootRouter = express.Router();

rootRouter.get("/", TodoController.fetchTodos);

export default rootRouter;
