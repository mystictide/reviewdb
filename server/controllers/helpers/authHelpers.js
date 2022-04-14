const asyncHandler = require("express-async-handler");
const axios = require("axios");

const getSpotifyAuthToken = asyncHandler(async () => {
  let access = Buffer.from(
    process.env.SPOTIFY_CLIENT + ":" + process.env.SPOTIFY_SECRET
  ).toString("base64");
  let token = "";
  await axios({
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: "Basic " + access,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      grant_type: "client_credentials",
    },
    json: true,
  }).then((res) => {
    token = res.data;
  });
  return token;
});

const getTwitchAuthToken = asyncHandler(async () => {
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
    token = res.data;
  });
  return token;
});

module.exports = {
  getSpotifyAuthToken,
  getTwitchAuthToken,
};
