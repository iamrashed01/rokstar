const _ = require('lodash');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload = multer();
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {
    loginAuthValidation
} = require('../validations/authValidation');

router.post('/login', upload.none(), async (req, res) => {
    const {
        error
    } = loginAuthValidation(req.body);
    if (error) return res.status(400).json({
        message: error.details[0].message,
        success: false
    })

    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) return res.status(400).json({
        message: 'email or password not match!'
    })

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({
        message: 'email or password not match!'
    })

    const token = user.generateAuthToken();

    res.status(200).json({
        token: token,
        data: _.pick(user, ['full_name', 'email', 'designation']),
        message: 'Succesfully Log in.',
        success: true
    });
});

module.exports = router;