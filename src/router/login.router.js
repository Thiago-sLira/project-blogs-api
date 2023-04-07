const routerLogin = require('express').Router();
const loginController = require('../controllers/login.controller');
const validateLoginMiddleware = require('../middlewares/validateLogin');

routerLogin.post('/', validateLoginMiddleware, loginController.userLogin);

module.exports = routerLogin;
