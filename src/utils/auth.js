const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWTDefault = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const generateToken = (payload, configJWT = configJWTDefault) => {
    const token = jwt.sign(payload, secretKey, configJWT);
    return token;
};

const validateToken = (token) => {
    const isValid = jwt.verify(token, secretKey);
    return isValid;
};

const decodeToken = (token) => {
    const decoded = jwt.decode(token, secretKey);
    return decoded;
};

module.exports = {
    generateToken,
    validateToken,
    decodeToken,
};
