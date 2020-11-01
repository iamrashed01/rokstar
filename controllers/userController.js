const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = require('../models/user');
const {
    createUserValidate,
    updateUserValidate
} = require('../validations/uservalidation');

async function createUserController(req, res, next) {
    const {
        error
    } = createUserValidate(req.body);
    if (error) return res.status(400).json({
        message: error.details[0].message,
        success: false
    })

    let user = await User.findOne({
        email: req.body.email
    });
    if (user) return res.status(400).json({
        message: 'User already registered.',
        success: false
    })

    user = await new User(_.pick(req.body, ['full_name', 'email', 'password', 'designation']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.status(200).json({
        data: user,
        message: 'User created succesfully',
        success: true
    })
}

async function updateUserController(req, res, next) {
    const {
        error
    } = updateUserValidate(req.body);
    if (error) return res.status(400).json({
        message: error.details[0].message,
        success: false
    })

    let user = await User.findOne({
        email: req.body.email
    });

    if (!user) return res.status(400).json({
        message: 'User Not Found.',
        success: false
    })

    user.full_name = req.body.full_name;
    user.designation = req.body.designation;

    await user.save();

    res.status(200).json({
        data: user,
        message: 'User updated succesfully',
        success: true
    })
}

async function getUserController(req, res, next) {
    let user = await User.findOne({
        _id: req.user._id
    });

    console.log(req.user, 'req.user');

    if (!user) return res.status(400).json({
        message: 'User Not Found.',
        success: false
    })

    res.status(200).json({
        data: user,
        message: 'data retrieved succesfully',
        success: true
    })
}

module.exports = {
    createUserController,
    updateUserController,
    getUserController
}