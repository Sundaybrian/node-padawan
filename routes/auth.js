const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// @route GET api/auth
// @desc  Get logged in user
// @access Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route POST api/auth
// @desc Auth user & get token
// @access Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    // gen errors
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.send(400).json({ errors: errors.array() });

    // destructure
    const { email, password } = req.body;

    try {
      // check if email exists
      const user = await User.findOne({ email });
      if (!user) return res.statu(400).json({ msg: "invalid credentials" });

      // verify password
      const matchPass = await bcrypt.compare(password, user.password);
      if (!matchPass)
        return res.status(400).json({ msg: "invalid credentials" });

      // generate token
      const payload = {
        user: {
          id: user._id,
        },
      };

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
      res.status(500).json({ error });
    }
  }
);

module.exports = router;
