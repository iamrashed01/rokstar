const mongoose = require('mongoose');

const About = mongoose.model('About', new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    leftImage: {
        type: String,
        required: true
    }
}))

const Social = mongoose.model('Social', new mongoose.Schema({
    facebook: {
        type: String,
        maxlength: 2048,
        default: null
    },
    twitter: {
        type: String,
        maxlength: 2048,
        default: null
    },
    linkedin: {
        type: String,
        maxlength: 2048,
        default: null
    },
    youtube: {
        type: String,
        maxlength: 2048,
        default: null
    }
}))

const Bio = mongoose.model('Bio', new mongoose.Schema({
    bio: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 2048
    }
}))

module.exports = {
    About,
    Social,
    Bio
};