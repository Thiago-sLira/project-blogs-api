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

module.exports = {
    createNewUser,
};
