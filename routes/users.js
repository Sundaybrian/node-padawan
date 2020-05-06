const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register a user
// @access  public
router.post(
  "/register",
  [
    check("name", "Please enter a name with 6 or more characters").isLength({
      min: 6,
      max: 200,
    }),
    check("email", "Please enter valid a email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 8, max: 255 }),
  ],
  async (req, res) => {
    // validate
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

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
      // TODO all more metadata to the user e.g type, club
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
  }
);

// @route   GET api/users
// @desc    GEt all club users
// @access  Private
router.get("/", (req, res) => {
  res.send("All users");
});

module.exports = router;
