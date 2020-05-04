const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ msg: "first node js app" });
});

// define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/articles", require("./routes/articles"));
app.use("/api/videos", require("./routes/videos"));

// const PORT = process.env.PORT
app.listen(5000);
