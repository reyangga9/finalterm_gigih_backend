const Video = require("../models/video.model");

const getVideoAll = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.status(200).json(videos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getVideoById = async (req, res) => {
  try {
    const video = await Video.findOne({
      _id: req.params.id,
    });
    // const comments = await Comment.findOne({ videoId: req.params.id });
    res
      .status(200)
      // .json(video);
      .json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getVideoAll, getVideoById };
