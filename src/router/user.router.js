const routerUser = require('express').Router();
const userController = require('../controllers/user.controller');
const validateNewUserMiddleware = require('../middlewares/validateNewUser');
const validateTokenMiddleware = require('../middlewares/validateToken');

routerUser.post('/', validateNewUserMiddleware, userController.createNewUser);
routerUser.get('/', validateTokenMiddleware, userController.getAllUsers);
routerUser.get('/:id', validateTokenMiddleware, userController.getUserById);

module.exports = routerUser;
