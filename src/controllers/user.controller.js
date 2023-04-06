const userService = require('../services/user.service');

const createNewUser = async (req, res, next) => {
    try {
        const newUser = await userService.createNewUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNewUser,
};