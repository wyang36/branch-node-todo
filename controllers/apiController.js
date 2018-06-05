const TodoList = require('../models/todoListModel');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todolists', (req, res) => {
        TodoList.find({isCompletedList : false}, (err, todolists) => {
            if (err)
                throw err;
            else
                res.send(todolists);
        })
    });

    app.get('/api/completedlist', (req, res) => {
        TodoList.find({isCompletedList : true}, (err, todolists) => {
            if (err)
                throw err;
            else
                res.send(todolists[0]);
        })
    });

    app.get('/api/todolist/:id', (req, res) => {
        TodoList.findById({ _id: req.params.id }, (err, todolist) => {
            if (err)
                throw err;
            else
                res.send(todolist);
        })
    })

    app.post('/api/todolist', (req, res) => {
        const newTodoList = TodoList({
            title: req.body.title,
            isCompletedList: req.body.isCompletedList,
            todos: req.body.todos
        });
        newTodoList.save((err) => {
            if (err) throw err;
            TodoList.find({}, (err, newTodoLists) => {
                if (err)
                    throw err;
                else
                    res.send(newTodoLists);
            })
        })
    });

    app.put('/api/todolist', (req, res) => {
        TodoList.findByIdAndUpdate(req.body.id, {
            title: req.body.title,
            todos: req.body.todos
        }, (err, todo) => {
            if (err) throw err;
            TodoList.find({}, (err, newTodoLists) => {
                if (err)
                    throw err;
                else
                    res.send(newTodoLists);
            })
        })
    });

    app.delete('/api/todolist/:id', (req, res) => {
        TodoList.findByIdAndRemove({ _id: req.params.id }, (err) => {
            if (err)
                throw err;
            TodoList.find({}, (err, todoLists) => {
                if (err)
                    throw err;
                else
                    res.send(todoLists);
            })
        })
    })
}