const { Category, BlogPost, PostCategory, User, Sequelize } = require('../models');
const ErrorLaunch = require('../utils/ErrorLaunch');

const authorizeUser = (userLogged, postFound) => {
    if (userLogged.id !== postFound.userId) {
        throw new ErrorLaunch('Unauthorized user', 401);
    }
};

const verifyIfPostExists = async (postId) => {
    const postFound = await BlogPost.findOne({ where: { id: postId } });

    if (!postFound) {
        throw new ErrorLaunch('Post does not exist', 404);
    }

    return postFound;
};

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

const updatePost = async (postId, contentToUpdate, userLogged) => {
    const postFound = await verifyIfPostExists(postId);

    authorizeUser(userLogged, postFound);

    await BlogPost.update(contentToUpdate, {
        where: { id: postId },
        returning: true,
    });

    const postUpdated = await getPostById(postId);

    return postUpdated;
};

const deletePost = async (postId, userLogged) => {
    const postFound = await verifyIfPostExists(postId);

    authorizeUser(userLogged, postFound);

    await PostCategory.destroy({ where: { postId } });

    await BlogPost.destroy({ where: { id: postId } });
};

const searchPostByTerm = async (term) => {
    const postsFound = await BlogPost.findAll({
        where: {
            [Sequelize.Op.or]: [
                { title: { [Sequelize.Op.substring]: term } },
                { content: { [Sequelize.Op.substring]: term } },
            ],
        },
        include: [{ model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } }],
    });

    return postsFound;
};

module.exports = {
    createNewPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    searchPostByTerm,
};
