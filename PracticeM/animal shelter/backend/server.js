const express = require('express');
const mongoose = require('mongoose');
// const bootstrap = require('bootstrap');
const cors = require('cors');
const app = express();
const Todos = require('./models/todos.js');




app.use(express.json());
app.use(cors());



app.post('/todos', (req,res) => {
    Todos.create(req.body, (err, createdTodo)=>{
        res.json(createdTodo)
    })
})

app.get('/todos', (req,res) => {
    Todos.find({}, (err, foundTodo) => {
        res.json(foundTodo)
    })
})

app.delete('/todos/:id', (req,res) => {
    Todos.findByIdAndRemove(req.params.id, (err, deleteTodo) => {
        res.json(deleteTodo);
    })
})

app.put('/todos/:id', (req,res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateTodo) => {
        res.json(updateTodo);
    })
})

app.get('/todos/:id', (req, res) => {
    find.findById(req.params.id, (err, thisEdit) => {
        res.json(thisEdit);
    })
  })






app.listen(3000, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open' , () => {
    console.log('connected to mongod...');
})

