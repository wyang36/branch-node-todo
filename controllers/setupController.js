const TodoLists = require('../models/todoListModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        //seed database
        const starterTodoList = [{
            title: 'test list',
            isCompletedList: false,
            todos: [
                {
                    title: 'Buy milk',
                    content: 'Get store brand skim milk',
                    dueDate: new Date()
                },
                {
                    title: 'Feed cat',
                    content: 'Give him wet and dry food, but not so much that he would get fat',
                    dueDate: new Date()
                },
                {
                    title: 'Take out trash',
                    content: 'Take it out Sunday night since trash day is Monday. Also separate recycling.',
                    dueDate: new Date()
                }
            ]
        },
        {
            title: 'completed',
            isCompletedList: true,
            todos: [
                {
                    title: 'Buy milk',
                    content: 'Get store brand skim milk',
                    dueDate: new Date()
                }
            ]
        }];

        TodoLists.create(starterTodoList, (err, results) => {
            res.send(results);
        })
    })
}