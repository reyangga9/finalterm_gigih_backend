const express = require("express");
const {
  getVideoAll,
  getVideoById,
} = require("../controllers/video.controller");

const router = express.Router();

// app = express();

// find All
router.get("/", getVideoAll);
// find by id (one)
router.get("/:id", getVideoById);

module.exports = router;
