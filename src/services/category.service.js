const { Category } = require('../models');
const ErrorLaunch = require('../utils/ErrorLaunch');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });

    return newCategory;
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();

    if (!allCategories.length) {
        throw new ErrorLaunch('No categories registered', 404);
    }

    return allCategories;
};

module.exports = {
    createCategory,
    getAllCategories,
};