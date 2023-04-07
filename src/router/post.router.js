const routerPost = require('express').Router();
const postController = require('../controllers/post.controller');
const validateTokenMiddleware = require('../middlewares/validateToken');
const validateNewPostBody = require('../middlewares/validateNewPost');

routerPost.post('/', validateTokenMiddleware, validateNewPostBody, postController.createNewPost);
routerPost.get('/', validateTokenMiddleware, postController.getAllPosts);
routerPost.get('/:id', validateTokenMiddleware, postController.getPostById);

module.exports = routerPost;
