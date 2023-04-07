const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const ErrorLaunch = require('../utils/ErrorLaunch');

const userLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
        throw new ErrorLaunch('Invalid fields', 400);
    }

    const token = generateToken({ id: user.id, email });

    return { token };
};

module.exports = {
    userLogin,
};
