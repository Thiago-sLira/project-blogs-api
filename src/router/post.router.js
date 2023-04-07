const routerPost = require('express').Router();
const postController = require('../controllers/post.controller');
const validateTokenMiddleware = require('../middlewares/validateToken');

routerPost.post('/', validateTokenMiddleware, postController.createNewPost);

module.exports = routerPost;
