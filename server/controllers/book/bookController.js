const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Book = require("../../models/book/bookModel");
const User = require("../../models/userModel");

// @desc    Get Random Books
// @route   GET /api/books/random
// @access  Public
const getRandomBooks = asyncHandler(async (req, res) => {
    books = await Book.aggregate([{ $sample: { size : 20 }}]);
    res.status(200).json(books);
});

module.exports = {
    getRandomBooks,
};
