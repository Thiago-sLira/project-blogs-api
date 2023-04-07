const { validateToken } = require('../utils/auth');

module.exports = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }

        const decodedToken = validateToken(authorization);
        req.user = decodedToken;

        next();
    } catch (error) {
        next(error);
    }
};
