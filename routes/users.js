const router = require("express").Router();
const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  public
router.post("/register", async (req, res) => {
  // create user instance
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    // save to mongodb
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// @route   GET api/users
// @desc    GEt all club users
// @access  Private
router.get("/", (req, res) => {
  res.send("All users");
});

module.exports = router;
