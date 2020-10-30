const Joi = require('joi');

function createUserValidate(req) {
    const schema = Joi.object({
        full_name: Joi.string().min(3).max(255).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(255).required(),
        designation: Joi.string().min(3).max(255).required(),
    })
    return schema.validate(req);
}

function updateUserValidate(req) {
    const schema = Joi.object({
        full_name: Joi.string().min(3).max(255).required(),
        designation: Joi.string().min(3).max(255).required(),
        email: Joi.string().email().required(),
    })
    return schema.validate(req);
}

module.exports = {
    createUserValidate,
    updateUserValidate
};