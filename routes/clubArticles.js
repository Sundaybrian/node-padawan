const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const ClubArticle = require("../models/ClubArticles");

// @route GET api/clubarticles
// @desc get all articles
// @access public

router.get("/", async (req, res) => {
  // pagination options
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  try {
    const articles = await ClubArticle.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    // fetch articles count
    const count = await ClubArticle.countDocuments();

    results.results = articles;

    if (startIndex > 0) {
      results.previousPage = page - 1;
    }

    if (endIndex < count) {
      results.nexPage = page + 1;
    }

    results.totalPages = Math.ceil(count / limit);
    results.currentPage = page;
    results.limit = limit;

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// @route POST api/clubarticles/insertMany
// @desc insert all articles
// @access public
router.post("/insertMany", async (req, res) => {
  try {
    const articles = await ClubArticle.insertMany(req.body);
    res.status(201).json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
