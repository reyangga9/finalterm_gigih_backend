const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  linkyt: { required: true, type: String },
  img: { required: true, type: String },
  count: { required: true, type: Number },
  tags: { required: true, type: [String] },
  thumbnail: { required: true, type: String },
  tokoName: { required: true, type: String },
});

module.exports = mongoose.model("videos", videoSchema);
