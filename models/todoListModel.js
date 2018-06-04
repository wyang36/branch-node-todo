const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    title: String,
    isCompletedList: Boolean,
    todos: [{
        title: String,
        content: String,
        dueDate: Date,
        isCompleted: Boolean
    }]
});

const Todos = mongoose.model('TodoLists', todoListSchema);

module.exports = Todos;