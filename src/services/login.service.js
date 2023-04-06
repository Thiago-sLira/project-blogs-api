const { User } = require('../models');
const ErrorLaunch = require('../utils/ErrorLaunch');

const userLogin = async (body) => {
    // throw new ErrorLaunch('Invalid fields', 400);
    const user = await User.findOne({ where: { email: body.email, password: body.password } });

    if (!user) {
        throw new ErrorLaunch('Invalid fields', 400);
    }
};

module.exports = {
    userLogin,
};
