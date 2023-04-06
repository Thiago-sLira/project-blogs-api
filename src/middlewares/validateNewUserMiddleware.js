const Joi = require('joi');

const validateNewUserBody = (body) =>
    Joi.object({
        displayName: Joi.string().min(8).required().messages({
            'string.min': '"displayName" length must be at least 8 characters long',
        }),
        email: Joi.string().email().required().messages({
            'string.email': '"email" must be a valid email',
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': '"password" length must be at least 6 characters long',
        }),
    }).validate(body);

module.exports = (req, res, next) => {
    const { error } = validateNewUserBody(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};
