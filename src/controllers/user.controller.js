const userService = require('../services/user.service');

const createNewUser = async (req, res, next) => {
    try {
        const newUserToken = await userService.createNewUser(req.body);
        res.status(201).json(newUserToken);
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await userService.getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userById = await userService.getUserById(id);
        res.status(200).json(userById);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
};