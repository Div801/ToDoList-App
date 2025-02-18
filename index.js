const express = require('express')
const mongoose=require('mongoose')
const cors=require ('cors')
const task= require('./Models/ToDo')

const app= express();
const PORT= 5000;
app.use(cors());
app.use(express.json());

//mongoDB connection
mongoose.connect('mongodb://localhost:27017/Todos', {
    
  })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

    app.get('/getTodos', async (req,res)=>{
        try{
            const todos= await task.find();
            res.json(todos);
        
        }catch(err){
            res.status(500).json({message:"failed to retrieve todos",error:err.message})
        }
    })

    app.post('/add', async (req, res) => {
        try {
            const newToDo = new task(req.body); // Using the imported `task` model
            await newToDo.save();
            console.log(req.body);
            res.status(201).send("New ToDo saved successfully");
        } catch (err) {
            console.error(err); // Log the error for debugging
            res.status(400).json({ message: "Failed to save", error: err.message });
        }
    });

    // Update an existing ToDo
    app.put('/update/:id', async (req, res) => {
        const { id } = req.params;
        const { taskDetails } = req.body; // Assuming task is an object with name and type
    
        try {
            const updatedTodo = await task.findByIdAndUpdate(id, { taskDetails }, { new: true });
            if (!updatedTodo) {
                return res.status(404).json({ message: "Todo not found" });
            }
            res.json(updatedTodo);
        } catch (err) {
            res.status(500).json({ message: "Failed to update todo", error: err.message });
        }
    });
    
    
    
      
      

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`)
})