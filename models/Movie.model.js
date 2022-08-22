const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: Schema.Types.String,
  },
  director: {
    type: Schema.Types.String,
  },
  stars: {
    type: [Schema.Types.String],
  },
  image: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  showtimes: {
    type: [Schema.Types.String],
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
