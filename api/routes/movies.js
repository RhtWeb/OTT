const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const Movie = require("../models/Movie");

// Create Movie 
router.post("/", verifyToken, async (req, res) => {
  if(req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const createdMovie = await newMovie.save();
      res.status(201).json(createdMovie);
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(403).json("Not allowed to create Movie");
  }
});

// Update Movie 
router.put("/:id", verifyToken, async (req, res) => {
  if(req.user.isAdmin) {
    try {
      const updatedmovie = await Movie.findByIdAndUpdate(req.params.id, {
        $set : req.body
      }, {new : true});
      res.status(201).json(updatedmovie);
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(403).json("Not allowed to Update Movie");
  }
});

// Delete Movie 
router.delete("/:id", verifyToken, async (req, res) => {
  if(req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie was deleted");
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(403).json("Not allowed to Delete Movie");
  }
});

// Get Movie By Id
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const movieData = await Movie.findById(req.params.id);
    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get All Movie
router.get("/", verifyToken, async (req, res) => {
  if(req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
  
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});

// Get Random Movie 
router.get("/random", verifyToken, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;