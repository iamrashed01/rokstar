const Joi = require('joi');

function createHeroValidation(req) {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
        designation: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(req);
}

exports.createHeroValidation = createHeroValidation;