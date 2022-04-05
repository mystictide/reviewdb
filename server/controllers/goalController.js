const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "git gud" });
});

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("text field missing");
  }
  res.status(200).json({ message: "post gud" });
});

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `put gud ${req.params.id}` });
});

// @desc    Delete goals
// @route   DEL /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `del gud ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
