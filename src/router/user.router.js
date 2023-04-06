const routerUser = require('express').Router();
const userController = require('../controllers/user.controller');
const validateNewUserMiddleware = require('../middlewares/validateNewUserMiddleware');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');

routerUser.post('/', validateNewUserMiddleware, userController.createNewUser);
routerUser.get('/', validateTokenMiddleware, userController.getAllUsers);

module.exports = routerUser;