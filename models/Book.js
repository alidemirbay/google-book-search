
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, unique: true, require: true },
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String },
  image: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;