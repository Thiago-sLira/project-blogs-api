const postService = require('../services/post.service');

const createNewPost = async (req, res, next) => {
    try {
        const postCreated = await postService.createNewPost(req.body, req.user.id);
        return res.status(201).json(postCreated);
    } catch (error) {
        next(error);
    }
};

const getAllPosts = async (_req, res, next) => {
    try {
        const allPosts = await postService.getAllPosts();
        return res.status(200).json(allPosts);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNewPost,
    getAllPosts,
};