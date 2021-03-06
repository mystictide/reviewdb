const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
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
  { timestamps: true }, { collection: 'games' }
);

module.exports = mongoose.model("Game", gameSchema);
