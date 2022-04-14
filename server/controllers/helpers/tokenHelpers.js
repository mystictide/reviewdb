const asyncHandler = require("express-async-handler");
const Token = require("../../models/tokenModel");
const AuthHelpers = require("./authHelpers");

const checkToken = asyncHandler(async (req) => {
  let token = "";
  let now = new Date().toISOString();
  if (req === "Spotify") {
    token = await Token.findOne({ service: "spotify" });
    if (token.expiry < now) {
      let newToken = await AuthHelpers.getSpotifyAuthToken();
      let addExpiry = new Date(now);
      addExpiry.setSeconds(addExpiry.getSeconds() + newToken.expires_in);
      await Token.findOneAndUpdate(
        { service: "spotify" },
        { token: newToken.access_token, expiry: addExpiry.toISOString() }
      );
      return newToken.access_token;
    } else {
      return token.token;
    }
  } else if (req === "Twitch") {
    token = await Token.findOne({ service: "twitch" });
    if (token.expiry < now) {
      let newToken = await AuthHelpers.getTwitchAuthToken();
      let addExpiry = new Date(now);
      addExpiry.setSeconds(addExpiry.getSeconds() + newToken.expires_in);
      await Token.findOneAndUpdate(
        { service: "twitch" },
        { token: newToken.access_token, expiry: addExpiry.toISOString() }
      );
      return newToken.access_token;
    } else {
      return token.token;
    }
  } else if (req === "TMDB") {
    token = await Token.findOne({ service: "tmdb" });
    if (token.expiry < now) {
      await Token.findOneAndUpdate(
        { service: "tmdb" },
        { token: newToken.access_token, expiry: now }
      );
      return newToken.access_token;
    } else {
      return token.token;
    }
  }
});

module.exports = {
  checkToken,
};
