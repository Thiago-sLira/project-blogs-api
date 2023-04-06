const userService = require('../services/user.service');

const createNewUser = async (req, res, next) => {
    try {
        const newUserToken = await userService.createNewUser(req.body);
        res.status(201).json(newUserToken);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNewUser,
};