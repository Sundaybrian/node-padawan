const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const ClubVideos = require("../models/Videos");

// @route GET api/videos
// @desc get all videos
// @access public

router.get("/", async (req, res) => {
  // pagination options
  const sort_by = req.query.sort_by || "scrappedDate";
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  try {
    const videos = await ClubVideos.find()
      .sort(sort_by)
      .limit(limit)
      .skip(startIndex)
      .exec();

    // fetch articles count
    const count = await ClubVideos.countDocuments();

    results.results = videos;

    if (startIndex > 0) {
      results.previousPage = page - 1;
    }

    if (endIndex < count) {
      results.nextPage = page + 1;
    }

    results.totalPages = Math.ceil(count / limit);
    results.currentPage = page;
    results.limit = limit;

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: message.error });
  }
});

// @route POST api/videos/insertMany
// @desc insert all videos
// @access public
// @TODO find limit!!!
router.post("/insertMany", async (req, res) => {
  try {
    const videos = await ClubVideos.insertMany(req.body);
    res.status(201).json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
