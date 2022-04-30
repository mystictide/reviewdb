const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Painting = require("../../models/art/paintingModel");

// @desc    Get Random Paintings
// @route   GET /api/art/random
// @access  Public
const getRandomPaintings = asyncHandler(async (req, res) => {
  paintings = await Painting.aggregate([{ $sample: { size : 20 }}]);
  res.status(200).json(paintings);
});

module.exports = {
  getRandomPaintings,
};
