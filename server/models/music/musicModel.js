const mongoose = require("mongoose");

const musicSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Text value is missing"],
    },
  },
  { timestamps: true }, { collection: 'music' }
);

module.exports = mongoose.model("Music", musicSchema);
