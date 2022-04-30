const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, "Text value is missing"],
    },
    authors: [
      {
        name: {
          type: String,
        },
      },
    ],
    number_of_pages: {
      type: String,
    },
    identifiers: [
      {
        goodreads: {
          type: String,
        },
        librarything: {
          type: String,
        },
        isbn_10: {
          type: String,
        },
        lccn: {
          type: String,
        },
        openlibrary: {
          type: String,
        },
      },
    ],
    publishers: [
      {
        name: {
          type: String,
        },
      },
    ],
    publish_date: {
      type: String,
    },
    cover: [
      {
        small: {
          type: String,
        },
        medium: {
          type: String,
        },
        large: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true },
  { collection: "books" }
);

module.exports = mongoose.model("Book", bookSchema);
