const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  checkExistingEmail,
  checkExistingUsername
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);
router.post("/cusername", checkExistingUsername);
router.post("/cmail", checkExistingEmail);

module.exports = router;
