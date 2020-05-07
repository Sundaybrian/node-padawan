const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    refs: user,
  },

  name: {
    type: String,
    min: 6,
    required: true,
  },
  nickname: {
    type: String,
  },
  founded: {
    type: Date,
    default: Date.now,
  },
});

module.export = mongoose.model("Club", clubSchema);
