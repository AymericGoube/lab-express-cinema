const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) => res.json({ success: true, name: "movie" }));

// GET /movies
router.get("/movies", async (req, res) => {
  const everyMovies = await Movie.find().select({ title: 1, director: 1 });
  res.json({ everyMovies });
});

router.get("/movie/:id", async (req, res) => {
  const notEveryMovies = await Movie.findById(req.params.id);
  res.json({ notEveryMovies });
});
module.exports = router;
