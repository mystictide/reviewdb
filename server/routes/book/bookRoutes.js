const express = require("express");
const router = express.Router();
const {
    getRandomBooks,
} = require("../../controllers/book/bookController");
// const { protect } = require("../../middleware/authMiddleware");

router.route("/random").get(getRandomBooks);

module.exports = router;