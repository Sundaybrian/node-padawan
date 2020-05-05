const router = require("express").Router();
const User = require("../models/User");
const { registerValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route   POST api/users
// @desc    Register a user
// @access  public
router.post("/register", async (req, res) => {
  // validate
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if useremail exists on the db
  const exists = await User.findOne({ email: req.body.email });
  if (exists) return res.status(400).json({ msg: "Email already exists" });

  // hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create user instance
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    // save to mongodb
    const savedUser = await user.save();
    const payload = {
      user: {
        id: savedUser._id,
      },
    };

    // generate token
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
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
