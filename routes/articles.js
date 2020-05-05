const router = require("express").Router();
const auth = require("../middlewares/auth");
const User = require("../models/User");
const Article = require("../models/Article");
const { check, validationResult } = require("express-validator");

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
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("subtitle", "Subtitle is required").not().isEmpty(),
      check("content", "Content is required").not().isEmpty(),
      check("imageUrl", "imageUrl is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // validate
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.send(400).json({ errors: errors.array() });

    // destructure
    const { title, subtitle, content, imageUrl } = req.body;
    try {
      const article = new Article({
        author: req.user.id,
        title,
        subtitle,
        content,
        imageUrl,
      });

      const savedArticle = await article.save();
      res.status(201).json(savedArticle);
    } catch (error) {
      console.error(error.message);
      res.json(error);
    }
  }
);

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
