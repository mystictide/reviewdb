const express = require("express");
const router = express.Router();
const {
    getPopularGames,
} = require("../../controllers/game/gameController");
// const { protect } = require("../../middleware/authMiddleware");

router.route("/popular").get(getPopularGames);

module.exports = router;