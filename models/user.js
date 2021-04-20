const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    designation: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    isAdmin: Boolean
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        _id: this.id,
        isAdmin: this.isAdmin
    }, config.get('jwtPrivateKey'));
}

const User = mongoose.model('User', userSchema)

module.exports = User;