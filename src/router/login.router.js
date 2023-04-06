const router = require('express').Router();
const loginController = require('../controllers/login.controller');
const validateLoginMiddleware = require('../middlewares/validateLoginMiddleware');

router.post('/', validateLoginMiddleware, loginController.userLogin);

module.exports = router;
