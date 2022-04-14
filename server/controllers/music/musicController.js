const asyncHandler = require("express-async-handler");
const axios = require("axios");
const Music = require("../../models/music/musicModel");
const User = require("../../models/userModel");
const TokenHelpers = require("../../controllers/helpers/tokenHelpers");

// @desc    Get Popular Artists
// @route   GET /api/music
// @access  Public
const getPopularArtists = asyncHandler(async (req, res) => {
  let token = await TokenHelpers.checkToken("Spotify");
  let artists = [];
  let artistData = [];
  await axios({
    method: "GET",
    url:
      "https://api.spotify.com/v1/playlists/" +
      process.env.SPOTIFY_TOPID +
      "/tracks?limit=20",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  }).then((res) => {
    artists = res.data.items;
  });
  artists = artists.map((m) => m.track.album.artists[0].id);
  await axios({
    method: "GET",
    url: "https://api.spotify.com/v1/artists?ids=" + artists,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  }).then((res) => {
    artistData = res.data.artists;
  });
  res.status(200).json(artistData);
});

// @desc    Get Songs
// @route   GET /api/music
// @access  Private
const getSongs = asyncHandler(async (req, res) => {
  const Songs = await Song.find({ user: req.user.id });
  res.status(200).json(Songs);
});

// @desc    Set Songs
// @route   POST /api/music
// @access  Private
const setSong = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("text field missing");
  }

  const Song = await Song.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.status(200).json(Song);
});

// @desc    Update Songs
// @route   PUT /api/music/:id
// @access  Private
const updateSong = asyncHandler(async (req, res) => {
  const Song = await Song.findById(req.params.id);
  if (!Song) {
    res.status(400);
    throw new Error("Song not found");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  if (Song.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  const upd = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //create if doesn't exist
  });

  res.status(200).json(upd);
});

// @desc    Delete Songs
// @route   DEL /api/music/:id
// @access  Private
const deleteSong = asyncHandler(async (req, res) => {
  const Song = await Song.findById(req.params.id);

  if (!Song) {
    res.status(400);
    throw new Error("Song not found");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  if (Song.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  await Song.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPopularArtists,
  getSongs,
  setSong,
  updateSong,
  deleteSong,
};
