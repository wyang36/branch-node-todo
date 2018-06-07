# To-do lists
This is an API written with NodeJS, Express, Mongoose, and connects to a MongoDB database. Users can get all to-do lists, create a new list, edit an existing one, or delete a list.

## File structure
```
project 
└─── config  -> These files contain information on how to connect to a database, should be hashed in production
│    |   config.json
│    |   index.js  
│   
└─── controllers 
|    │   apiController.js   -> Here defines the routes for the CRUD api calls
|    │   setupController.js  -> This is only used to seed the database
|
|___ models
|    |   todoListModel.js  -> This is to define the Schema for to-do list 
|
|   app.js  -> Initialized the application
```

## How to run this program?
You can use the demo link [here](https://damp-sea-61125.herokuapp.com/), or you can run it on your local machine with the instructions below.
1. Install NodeJS on your machine if you have not installed it. Link is [here](https://nodejs.org/en)
2. Download this repo, and navigate to the folder.
3. Run "npm install"
4. Run "node app.js"
5. You can go to your browser and access it on http://localhost:3000

## Schema design
Since I choose to use MongoDB, I only used one Schema described below.
```
todoList {
    title: String,
    isCompletedList: Boolean,
    todos: [{
        title: String,
        content: String,
        dueDate: Date
    }]
}
```

## Endpoints
Below are the endpoints to make CRUD calls.
```
Read all lists: GET /api/todolists
Read a specific list: GET /api/todolist/:id

Create a new list: POST /api/todolist

Update an existing list: PUT /api/todolist

Delete a list: DELETE /api/todolist/:id
```
