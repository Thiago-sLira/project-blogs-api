const categoryService = require('../services/category.service');

const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newCategory = await categoryService.createCategory(name);
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCategory,
};
