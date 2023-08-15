const Comment = require("../models/comments.model");

const getCommentById = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.id });
    res
      .status(200)
      // .json(video);
      .json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const postCommentById = (req, res) => {
  const comment = new Comment({
    username: req.body.username,
    comment: req.body.comment,
    // timeStamp: Date.now(),
    videoId: req.params.id,
  });
  try {
    const commentToSave = comment.save();
    res.status(200).json(commentToSave);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { postCommentById, getCommentById };
