const route = require("express").Router();
const { check, validationResult } = require("express-validator");
const ClubArticles = require("../models/ClubArticles");

// @route GET api/clubarticles
// @desc get all articles
// @access public

route.get("/", async (req, res) => {
  try {
    const articles = await ClubArticles.find();
    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
