const postService = require('../services/post.service');

const createNewPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const post = await postService.createNewPost({ title, content, categoryIds });
        return res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createNewPost,
};