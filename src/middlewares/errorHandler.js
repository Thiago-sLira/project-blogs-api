const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const ErrorLaunch = require('../utils/ErrorLaunch');

module.exports = (err, _req, res, _next) => {
    if (err instanceof ErrorLaunch) {
        console.log(err);
        return res.status(err.code).json({ message: err.message });
    }

    if (err instanceof TokenExpiredError) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    if (err instanceof JsonWebTokenError) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
};
