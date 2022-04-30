const express = require("express");
const router = express.Router();
const {
  getRandomPoems,
} = require("../../controllers/art/poemController");

router.route("/random").get(getRandomPoems);

module.exports = router;