const routerPost = require('express').Router();
const postController = require('../controllers/post.controller');
const validateTokenMiddleware = require('../middlewares/validateToken');
const validateNewPostBody = require('../middlewares/validateNewPost');

routerPost.use(validateTokenMiddleware);
routerPost.post('/', validateNewPostBody, postController.createNewPost);
routerPost.get('/', postController.getAllPosts);
routerPost.get('/:id', postController.getPostById);
routerPost.put('/:id', validateTokenMiddleware, postController.updatePost);

module.exports = routerPost;
