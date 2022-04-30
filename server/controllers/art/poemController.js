const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Poem = require("../../models/art/poemModel");
const User = require("../../models/userModel");

// @desc    Get Random Poems
// @route   GET /api/art/poems/random
// @access  Public
const getRandomPoems = asyncHandler(async (req, res) => {
  let Poems = "";
  //   let url = "https://poetrydb.org/author/Poe/author,title,lines.json";
  let url = "https://poetrydb.org/random/20/author,title,lines.json";
  await axios({
    method: "GET",
    url: url,
  }).then((res) => {
    Poems = res.data;
  });
  res.status(200).json(Poems);
});

module.exports = {
  getRandomPoems,
};
