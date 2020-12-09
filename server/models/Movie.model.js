const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const MovieModel = model("Movie", MovieSchema);

module.exports = MovieModel;
