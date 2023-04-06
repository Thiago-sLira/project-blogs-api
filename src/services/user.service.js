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

module.exports = {
    createNewUser,
    getAllUsers,
};
