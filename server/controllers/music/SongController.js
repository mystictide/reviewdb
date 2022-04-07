const asyncHandler = require("express-async-handler");
const Song = require("../../models/music/SongModel");
const User = require("../../models/userModel");

// @desc    Get Songs
// @route   GET /api/Songs
// @access  Private
const getSongs = asyncHandler(async (req, res) => {
  const Songs = await Song.find({ user: req.user.id });
  res.status(200).json(Songs);
});

// @desc    Set Songs
// @route   POST /api/Songs
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
// @route   PUT /api/Songs/:id
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
// @route   DEL /api/Songs/:id
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
  getSongs,
  setSong,
  updateSong,
  deleteSong,
};
