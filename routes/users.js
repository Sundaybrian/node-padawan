const express = require("express");
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  public
router.post("/", (req, res) => {
  res.send("Register a user");
});

// @route   GET api/users
// @desc    GEt all club users
// @access  Private
router.get("/", (req, res) => {
  res.send("All users");
});

module.exports = router;
