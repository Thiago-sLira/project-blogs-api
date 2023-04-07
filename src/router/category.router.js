const routerCategory = require('express').Router();
const categoryController = require('../controllers/category.controller');
const validadeNewCategory = require('../middlewares/validadeNewCategory');
const validateTokenMiddleware = require('../middlewares/validateToken');

routerCategory.post(
    '/',
    validateTokenMiddleware,

    validadeNewCategory,

    categoryController.createCategory,
);
routerCategory.get('/', validateTokenMiddleware, categoryController.getAllCategories);

module.exports = routerCategory;
