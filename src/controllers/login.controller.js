const loginService = require('../services/login.service');

const userLogin = async (req, res) => {
    try {
        const token = await loginService.userLogin(req.body);
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    userLogin,
};
