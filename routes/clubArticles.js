const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const ClubArticle = require("../models/ClubArticles");

// @route GET api/clubarticles
// @desc get all articles
// @access public

router.get("/", async (req, res) => {
  try {
    const articles = await ClubArticle.find();
    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
