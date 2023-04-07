const routerUser = require('express').Router();
const userController = require('../controllers/user.controller');
const validateNewUserMiddleware = require('../middlewares/validateNewUser');
const validateTokenMiddleware = require('../middlewares/validateToken');

routerUser.post('/', validateNewUserMiddleware, userController.createNewUser);
routerUser.use(validateTokenMiddleware);
routerUser.get('/', userController.getAllUsers);
routerUser.get('/:id', userController.getUserById);
routerUser.delete('/me', userController.deleteUser);

module.exports = routerUser;
