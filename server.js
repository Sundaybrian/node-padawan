const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("connected to mongodb")
);

// Middleware
app.use(express.json());

// define routes middleware
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/articles", require("./routes/articles"));
app.use("/api/clubArticles", require("./routes/clubArticles"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Massive fc server started"));
