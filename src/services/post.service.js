const { Category, BlogPost, PostCategory } = require('../models');
const ErrorLaunch = require('../utils/ErrorLaunch');

const createNewPost = async ({ title, content, categoryIds }, userId) => {
    const promisesCategories = categoryIds.map((id) => Category.findOne({ where: { id } }));
    const categories = await Promise.all(promisesCategories);

    if (categories.some((category) => !category)) {
        throw new ErrorLaunch('one or more "categoryIds" not found', 400);
    }

    const postCreated = await BlogPost.create({
        title, content, userId, published: new Date(), updated: new Date(),
    });

    const promisesPostCategories = categoryIds.map((id) => PostCategory.create({
        postId: postCreated.id, categoryId: id,
    }));

    await Promise.all(promisesPostCategories);

    return postCreated;
};

module.exports = {
    createNewPost,
};
