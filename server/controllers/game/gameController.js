const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Game = require("../../models/game/gameModel");
const User = require("../../models/userModel");
const TokenHelpers = require("../../controllers/helpers/tokenHelpers");

// @desc    Get Popular Games
// @route   GET /api/games/popular
// @access  Public
const getPopularGames = asyncHandler(async (req, res) => {
  let token = await TokenHelpers.checkToken("Twitch")
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
