const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

const configJWTDefault = {
    expiresIn: '100d',
    algorithm: 'HS256',
};

const generateToken = (payload, configJWT = configJWTDefault) => {
    const token = jwt.sign(payload, secretKey, configJWT);
    return token;
};

const validateToken = (token) => {
    if (!token) return { message: 'Missing token!' };
    const isValid = jwt.verify(token, secretKey);
    return isValid;
};

const decodeToken = (token) => {
    if (!token) return { message: 'Missing token!' };
    const decoded = jwt.decode(token, secretKey);
    return decoded;
};

module.exports = {
    generateToken,
    validateToken,
    decodeToken,
};
