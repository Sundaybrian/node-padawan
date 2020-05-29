const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const ClubVideos = require("../models/Videos");

// @route GET api/videos
// @desc get all videos
// @access public

router.get("/", async (req, res) => {
  try {
    const videos = await ClubVideos.find();
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
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
