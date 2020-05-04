const express = require("express");
const router = express.Router();

// @route   GET api/articles
// @desc    Get all club articles
// @access  Public
router.get("/", (req, res) => {
  res.send("Get all articles");
});

// @route   POST api/articles
// @desc    Create an article
// @access  Private
router.post("/", (req, res) => {
  res.send("Create Article");
});

// @route   PUT api/articles/:id
// @desc    Update an article
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update article");
});

// @route   PUT api/articles/:id
// @desc    Delete an article
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete article");
});

module.exports = router;
