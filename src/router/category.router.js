const routerCategory = require('express').Router();
const categoryController = require('../controllers/category.controller');
const validateLoginMiddleware = require('../middlewares/validateLoginMiddleware');

routerCategory.post('/', validateLoginMiddleware, categoryController.createCategory);

module.exports = routerCategory;
