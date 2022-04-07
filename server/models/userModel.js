const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "you'll need a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "you'll need an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "you'll need a password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
