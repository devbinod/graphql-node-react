const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model("Book", BookSchema);
