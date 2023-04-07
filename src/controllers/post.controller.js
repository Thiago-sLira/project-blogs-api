const postService = require('../services/post.service');

const createNewPost = async (req, res) => {
    try {
        const postCreated = await postService.createNewPost(req.body, req.user.id);
        return res.status(201).json(postCreated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createNewPost,
};