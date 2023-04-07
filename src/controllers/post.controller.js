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

const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const postFound = await postService.getPostById(id);
        return res.status(200).json(postFound);
    } catch (error) {
        next(error);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const contentToUpdate = req.body;
        const userLogged = req.user;
        const postUpdated = await postService.updatePost(postId, contentToUpdate, userLogged);
        return res.status(200).json(postUpdated);
    } catch (error) {
        next(error);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const userLogged = req.user;
        await postService.deletePost(postId, userLogged);
        return res.status(204).end();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNewPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};