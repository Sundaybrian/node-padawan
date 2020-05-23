const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// @route GET api/auth
// @desc  Get logged in user
// @access Private
router.get("/current-user", auth, async (req, res) => {
  try {
    // fetch user obj without passorwd
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// @route POST api/auth
// @desc Auth user & get token
// @access Public
router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    // gen errors
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.sendStatus(400).json({ errors: errors.array() });

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
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
