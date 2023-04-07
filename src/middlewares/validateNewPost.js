const Joi = require('joi');

const validateNewPostBody = (body) =>
    Joi.object({
        title: Joi.string().required().messages({
            'string.min': '"displayName" length must be at least 8 characters long',
        }),
        content: Joi.string().required().messages({
            'string.email': '"email" must be a valid email',
        }),
        categoryIds: Joi.string().min(6).required().messages({
            'string.min': '"password" length must be at least 6 characters long',
        }),
    }).validate(body);

module.exports = (req, res, next) => {
    
};