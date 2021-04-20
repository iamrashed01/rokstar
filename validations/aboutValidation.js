const Joi = require('joi');

function createAboutValidation(req) {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(req);
}

function createSocialValidation(req) {
    const schema = Joi.object({
        facebook: Joi.string().uri({
            scheme: [
                /https?/,
            ],
        }),
        twitter: Joi.string().uri({
            scheme: [
                /https?/,
            ],
        }),
        linkedin: Joi.string().uri({
            scheme: [
                /https?/,
            ],
        }),
        youtube: Joi.string().uri({
            scheme: [
                /https?/,
            ],
        })
    });
    return schema.validate(req);
}

function addBioValidation(req) {
    const schema = Joi.object({
        bio: Joi.string().min(3).max(2048).required()
    })
    return schema.validate(req);
}

module.exports = {
    createAboutValidation,
    createSocialValidation,
    addBioValidation
};