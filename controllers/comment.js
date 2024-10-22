const { Comment } = require('../models');

class CommentController {
  static async createComment(req, res) {
    try {
      const { nama, hadir, komentar } = req.body;
      const newComment = await Comment.create({ nama, hadir, komentar });
      res.status(201).json({
        status: 'success',
        message: 'Comment created successfully',
        data: newComment,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async getAllComments(req, res) {
    try {
      const comments = await Comment.findAll();
      res.status(200).json({
        status: 'success',
        message: 'Comments retrieved successfully',
        data: comments,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

module.exports = CommentController;