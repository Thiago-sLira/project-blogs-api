const { Category } = require('../models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });

    return newCategory;
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();

    if (!allCategories.length) {
        throw new Error('No categories registered');
    }

    return allCategories;
};

module.exports = {
    createCategory,
    getAllCategories,
};