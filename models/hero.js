const mongoose = require('mongoose');

const Hero = mongoose.model('Hero', new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    designation: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    backgroundImage: {
        type: String
    }
}))

module.exports = Hero;