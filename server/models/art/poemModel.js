const mongoose = require("mongoose");

const poemSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "painting value is missing"],
  },
  author: {
    type: String,
    required: [true, "painting value is missing"],
  },
  title: {
    type: String,
    required: [true, "painting value is missing"],
  },
  lines: {
    type: String,
    required: [true, "painting value is missing"],
  },
}, { collection: 'poems' });

module.exports = mongoose.model("Poem", poemSchema);
