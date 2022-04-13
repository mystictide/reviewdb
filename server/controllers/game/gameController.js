const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Game = require("../../models/game/gameModel");
const User = require("../../models/userModel");

// @desc    Get Auth Token
// @route   GET /api/games
// @access  Private
const getAuthToken = asyncHandler(async (req, res) => {
  let access =
    "client_id=" +
    process.env.TWITCH_CLIENT +
    "&client_secret=" +
    process.env.TWITCH_SECRET +
    "&grant_type=client_credentials";
  let token = "";
  await axios({
    method: "POST",
    url: "https://id.twitch.tv/oauth2/token?" + access,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  }).then((res) => {
    token = res.data.access_token;
  });
  return token;
});

// @desc    Get Popular Games
// @route   GET /api/games/popular
// @access  Public
const getPopularGames = asyncHandler(async (req, res) => {
  let token = await getAuthToken();
  let url = "https://api.twitch.tv/helix/games/top";
  let Games = "";
  await axios({
    method: "GET",
    url: url,
    headers: {
      Authorization: "Bearer " + token,
      "Client-Id": process.env.TWITCH_CLIENT,
    },
    json: true,
  }).then((res) => {
    const index = res.data.data.findIndex((i) => i.name === "Just Chatting");
    if (index > -1) {
      res.data.data.splice(index, 1);
    }
    Games = res.data.data;
  });
  res.status(200).json(Games);
});

module.exports = {
  getPopularGames,
};
