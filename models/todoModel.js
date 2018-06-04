const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    content: String,
    dueDate: Date,
    isCompleted: Boolean
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;