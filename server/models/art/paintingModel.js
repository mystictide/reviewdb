const mongoose = require("mongoose");

const paintingSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "painting value is missing"],
  },
  title: {
    type: String,
    required: [true, "painting value is missing"],
  },
  year: {
    type: String,
    required: [true, "painting value is missing"],
  },
  author: {
    type: String,
    required: [true, "painting value is missing"],
  },
  category: {
    type: String,
    required: [true, "painting value is missing"],
  },
  image_url: {
    type: String,
    required: [true, "painting value is missing"],
  },
}, { collection: 'paintings' });

module.exports = mongoose.model("Painting", paintingSchema);
