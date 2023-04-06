const routerLogin = require('express').Router();
const loginController = require('../controllers/login.controller');
const validateLoginMiddleware = require('../middlewares/validateLoginMiddleware');

routerLogin.post('/', validateLoginMiddleware, loginController.userLogin);

module.exports = routerLogin;
