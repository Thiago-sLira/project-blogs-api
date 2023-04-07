const postService = require('../services/post.service');

const createNewPost = async (req, res, next) => {
    try {
        const postCreated = await postService.createNewPost(req.body, req.user.id);
        return res.status(201).json(postCreated);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNewPost,
};