const express = require("express");
const router = express.Router();
const {
  getRandomPaintings,
} = require("../../controllers/art/paintingController");

router.route("/random").get(getRandomPaintings);

module.exports = router;