const e = require("express");

const mongoose = require('mongoose');

const ws22Schema = new mongoose.Schema({
    name2: {type: String, require: true},
    priority2: {type: String, require: true},
    description2: {type: String, require: true},
    rcode2: {type: String, require: true},
    completed2: {type: Boolean,},
    date2: {type: String}
});



const Ws22 = mongoose.model('Ws22', ws22Schema)

module.exports = Ws22;