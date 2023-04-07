const routerPost = require('express').Router();
const postController = require('../controllers/post.controller');

routerPost.post('/', postController.createNewPost);

module.exports = routerPost;
