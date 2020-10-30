const Joi = require('joi');

function loginAuthValidation(req) {
    const schema = Joi.object({
        email: Joi.string().min(3).max(255).email().required(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(req);
}

module.exports = {
    loginAuthValidation,
};