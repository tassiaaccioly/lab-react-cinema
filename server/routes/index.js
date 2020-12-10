const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findOne({ _id: id });

    if (movie) {
      return res.status(200).json(movie);
    }

    return res.status(404).json({ msg: "Movie Not Found" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.post("/movies", async (req, res) => {
  try {
    const result = await Movie.create(req.body);

    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
