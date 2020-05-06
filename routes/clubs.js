const router = require("express").Router();
const { check, validationResult } = require("express-validator");

// @method GET
// @access private
//  @desc Get all clubs

router.get("/", (req, res) => {
  res.send("Get all clubs");
});

// @method GET
// @access private
//  @desc create a club

router.post("/", (req, res) => {
  res.send("create a club");
});

// @method PUT
// @access private
//  @desc update a club

router.put("/", (req, res) => {
  res.send("update a club");
});

// @method DEL
// @access private
//  @desc delete a club

router.delete("/", (req, res) => {
  res.send("delete a club");
});

module.exports = router;
