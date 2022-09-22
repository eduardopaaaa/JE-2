const mongoose = require('mongoose');
// const bootstrap = require('bootstrap');

const todoSchema = new mongoose.Schema(
    {
    name: String,
    species: String,
    image: String,
    reserved: Boolean
}
)

const Todos = mongoose.model('Todo' , todoSchema);

module.exports = Todos;