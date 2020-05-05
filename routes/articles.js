const router = require("express").Router();
const auth = require("../middlewares/auth");
const Article = require("../models/Article");

// @route   GET api/articles
// @desc    Get all club articles
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    // fetch all articles belonging to particular author
    // TODO:fetch by clubs
    const articles = await Article.find({ author: req.user.id });
    res.status(200).json(articles);
  } catch (error) {
    res.send("Server Error");
  }
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
