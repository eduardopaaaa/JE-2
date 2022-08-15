const e = require("express");

const mongoose = require('mongoose');

const ws2Schema = new mongoose.Schema({
    name: {type: String, require: true},
    priority: {type: String, require: true},
    description: {type: String, require: true},
    completed: {type: Boolean,},
    startdate: {type: String}
});



const Ws2 = mongoose.model('Ws2', ws2Schema)

module.exports = Ws2;