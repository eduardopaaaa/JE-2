const e = require("express");

const mongoose = require('mongoose');

const ws22Schema = new mongoose.Schema({
    nm: {type: String, require: true},
    prio: {type: String, require: true},
    des: {type: String, require: true},
    rc: {type: String, require: true},
    compl: {type: Boolean,},
    dt: {type: String}
});



const Ws22 = mongoose.model('Ws22', ws22Schema)

module.exports = Ws22;