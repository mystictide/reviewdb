const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  service: {
    type: String,
    required: [true, "service value is missing"],
  },
  token: {
    type: String,
    required: [true, "token value is missing"],
  },
  expiry: {
    type: String,
    required: [true, "date value is missing"],
  },
}, { collection: 'tokens' });

module.exports = mongoose.model("Token", tokenSchema);
