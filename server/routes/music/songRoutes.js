const express = require("express");
const router = express.Router();
const {
  getSongs,
  setSong,
  updateSong,
  deleteSong,
} = require("../../controllers/music/songController");
const { protect } = require("../../middleware/authMiddleware");

router.route("/").get(protect, getSongs).post(protect, setSong);
router.route("/:id").put(protect, updateSong).delete(protect, deleteSong);

module.exports = router;
