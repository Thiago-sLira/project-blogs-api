const loginService = require('../services/login.service');

const userLogin = async (req, res, next) => {
    try {
        const token = await loginService.userLogin(req.body);
        res.status(200).json(token);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    userLogin,
};
