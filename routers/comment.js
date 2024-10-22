const CommentRouter = require('express').Router();

const CommentController = require('../controllers/comment');

CommentRouter.get('/', CommentController.getAllComments);
CommentRouter.post('/', CommentController.createComment);

module.exports = CommentRouter;