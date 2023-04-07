const Joi = require('joi');

const validatePostToUpdateBody = (body) =>
    Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
    }).messages({
        'string.empty': 'Some required fields are missing',
    }).validate(body);

module.exports = (req, res, next) => {
    const { error } = validatePostToUpdateBody(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};
