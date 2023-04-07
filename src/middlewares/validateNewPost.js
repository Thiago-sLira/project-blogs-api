const Joi = require('joi');

const validateNewPostBody = (body) =>
    Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        categoryIds: Joi.array().items(Joi.number()).required(),
    }).messages({
        'string.empty': 'Some required fields are missing',
    }).validate(body);

module.exports = (req, res, next) => {
    const { error } = validateNewPostBody(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};
