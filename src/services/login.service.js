const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const ErrorLaunch = require('../utils/ErrorLaunch');

const userLogin = async (body) => {
    const user = await User.findOne({ where: { email: body.email, password: body.password } });

    if (!user) {
        throw new ErrorLaunch('Invalid fields', 400);
    }

    const token = generateToken(body);

    return { token };
};

module.exports = {
    userLogin,
};
