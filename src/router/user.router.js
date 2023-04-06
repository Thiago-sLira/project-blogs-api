const router = require('express').Router();
const userController = require('../controllers/user.controller');
const validateNewUserMiddleware = require('../middlewares/validateNewUserMiddleware');

router.post('/', validateNewUserMiddleware, userController.createNewUser);

module.exports = router;
