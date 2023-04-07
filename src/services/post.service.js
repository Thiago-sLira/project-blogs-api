const { Category, BlogPost, PostCategory, User } = require('../models');
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

const getAllPosts = async () => {
    const allPosts = await BlogPost.findAll({
        include: [{ model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } }],
    });

    if (!allPosts.length) {
        throw new ErrorLaunch('No posts found', 404);
    }

    return allPosts;
};

const getPostById = async (id) => {
    const postFound = await BlogPost.findOne({
        where: { id },
        include: [{ model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } }],
    });

    if (!postFound) {
        throw new ErrorLaunch('Post does not exist', 404);
    }

    return postFound;
};

module.exports = {
    createNewPost,
    getAllPosts,
    getPostById,
};
