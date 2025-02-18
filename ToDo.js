// In Models/ToDo.js
const mongoose = require('mongoose');

// blueprint for todo item
const ToDoSchema = new mongoose.Schema({
    name: String,
    type: String,
});

//create the model based on schema
const TodoModel = mongoose.model("todos", ToDoSchema);


//export the model so it can be used in onather file
module.exports = TodoModel; // Make sure to export TodoModel
