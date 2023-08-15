var express = require("express");

var router = express.Router();
const {
  getCommentById,
  postCommentById,
} = require("../controllers/comment.controller");

/* GET home page. */

// // menambahkan comment
router.get("/:id", getCommentById);
router.post("/:id", postCommentById);

module.exports = router;
