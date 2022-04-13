const express = require("express");
const router = express.Router();
const {
  getPopularArtists,
  getSongs,
  setSong,
  updateSong,
  deleteSong,
} = require("../../controllers/music/musicController");
// const { protect } = require("../../middleware/authMiddleware");

router.route("/popular").get(getPopularArtists);
// router.route("/").get(protect, getSongs).post(protect, setSong);
// router.route("/:id").put(protect, updateSong).delete(protect, deleteSong);

module.exports = router;
