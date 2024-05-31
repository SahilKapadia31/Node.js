const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movie_name: String,
    movie_disc: String,
    movie_ratings: Number
})

const movieDB = mongoose.model("movieTbl", movieSchema);

module.exports = movieDB