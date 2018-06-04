const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos', (req, res) => {
        Todos.find({}, (err, todos) => {
            if (err)
                throw err;
            else
                res.send(todos);
        })
    });

    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({ _id: req.params.id }, (err, todo) => {
            if (err)
                throw err;
            else
                res.send(todo);
        })
    })

    app.post('/api/todo', (req, res) => {
        const newTodo = Todos({
            title: req.body.title,
            dueDate: req.body.dueDate,
            content: req.body.content,
            isCompleted: req.body.isCompleted
        });
        newTodo.save((err) => {
            if (err) throw err;
            Todos.find({}, (err, todos) => {
                if (err)
                    throw err;
                else
                    res.send(todos);
            })
        })
    });

    app.put('/api/todo', (req, res) => {
        Todos.findByIdAndUpdate(req.body.id, {
            title: req.body.title,
            dueDate: req.body.dueDate,
            content: req.body.content,
            isCompleted: req.body.isCompleted
        }, (err, todo) => {
            if (err) throw err;
            Todos.find({}, (err, todos) => {
                if (err)
                    throw err;
                else
                    res.send(todos);
            })
        })
    });

    app.delete('/api/todo', (req, res) => {
        Todos.findByIdAndRemove(req.body.id, (err) => {
            if (err)
                throw err;
            Todos.find({}, (err, todos) => {
                if (err)
                    throw err;
                else
                    res.send(todos);
            })
        })
    })
}