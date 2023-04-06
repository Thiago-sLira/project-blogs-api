const router = require('express').Router();
const userController = require('../controllers/user.controller');
const validateNewUserMiddleware = require('../middlewares/validateNewUserMiddleware');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');

router.post('/', validateNewUserMiddleware, userController.createNewUser);
router.get('/', validateTokenMiddleware);

module.exports = router;
