const { User } = require('../models');
const ErrorLaunch = require('../utils/ErrorLaunch');
const { generateToken } = require('../utils/auth');

const createNewUser = async (body) => {
    const validateIfUserAlreadyExists = await User.findOne({ where: { email: body.email } });

    if (validateIfUserAlreadyExists) {
        throw new ErrorLaunch('User already registered', 409);
    }

    await User.create(body);

    const token = generateToken(body);

    return { token };
};

const getAllUsers = async () => {
    const allUsers = await User.findAll({
        attributes: { exclude: ['password'] },
    });

    if (!allUsers.length) {
        throw new ErrorLaunch('No users registered', 404);
    }

    return allUsers;
};

const getUserById = async (id) => {
    const userById = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
    });

    if (!userById) {
        throw new ErrorLaunch('User does not exist', 404);
    }

    return userById;
};

const deleteUser = async (userId) => {
    const userToDelete = await User.findOne({ where: { id: userId } });

    if (!userToDelete) {
        throw new ErrorLaunch('User does not exist', 404);
    }

    await User.destroy({ where: { id: userId } });
};

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    deleteUser,
};
