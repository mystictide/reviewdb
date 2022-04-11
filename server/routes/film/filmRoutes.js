const express = require("express");
const router = express.Router();
const {
  getPopularFilms,
} = require("../../controllers/film/filmController");
// const { protect } = require("../../middleware/authMiddleware");

router.route("/popular").get(getPopularFilms);

module.exports = router;