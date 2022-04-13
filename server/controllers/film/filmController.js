const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Film = require("../../models/film/filmModel");
const User = require("../../models/userModel");

// @desc    Get Popular Films
// @route   GET /api/films/popular
// @access  Public
const getPopularFilms = asyncHandler(async (req, res) => {
  let Films = "";
  let url =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    process.env.TMDB_V3KEY +
    "&language=en-US&sort_by=popularity.desc&sort_by=popularity.desc&page=1";
  await axios({
    method: "GET",
    url: url,
    json: true,
  }).then((res) => {
    Films = res.data.results;
  });
  res.status(200).json(Films);
});

module.exports = {
  getPopularFilms,
};
