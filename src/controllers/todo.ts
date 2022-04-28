import { RequestHandler } from "express";
import Todo from "../model/todo";
import { v4 as uuid } from 'uuid'

namespace TodoController { 
    export const addTodo: RequestHandler = (req, res) => {
        if (!req.body.todo) return res.redirect("/");
        Todo.create({ title: req.body.todo })
            .then(()=> {
                res.redirect('/');
            })
            .catch(err=> console.log(err));
    };
    
    export const fetchTodos: RequestHandler = (req, res)=> {
        Todo.count({ where: { completed: true } })
            .then( completedCount=> {
                Todo.findAll()
                    .then(todos=> {
                        res.render("index", {
                            pageTitle: "کارهای روزمره",
                            todos,
                            completedCount,
                            todosCount: todos.length - completedCount,
                        });
                    })
            } )
    }

    export const deleteTodo: RequestHandler = (req, res)=> {
        Todo.destroy({ where: { id: req.params.id } })
            .then(()=> res.redirect('/'))
            .catch(err=> console.log(err))
    }

    export const completeTodo: RequestHandler = (req, res)=> {
        Todo.findByPk(req.params.id)
            .then( todo=> {
                todo.set('completed', true);
                return todo.save();
            })
            .then(()=> res.redirect('/'))
            .catch(err=> console.log(err))
    }
}

export default TodoController;
