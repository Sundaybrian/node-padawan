const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // get token from header

  const token = req.header("auth-token");

  // check if token exists
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    // decode token
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);

    // assign user obj to req.uset
    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};
