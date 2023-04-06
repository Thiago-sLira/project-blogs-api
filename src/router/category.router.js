const routerCategory = require('express').Router();
const categoryController = require('../controllers/category.controller');
const validadeNewCategory = require('../middlewares/validadeNewCategory');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');

routerCategory.post(
    '/',
    validateTokenMiddleware,

    validadeNewCategory,

    categoryController.createCategory,
);

module.exports = routerCategory;
