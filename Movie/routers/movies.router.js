const { Router } = require('express');
const { home, addMovie, updateMovie, deleteMovie, add_movie, edit_movie, uploadImg } = require('../controllers/movie.controller');

const router = Router();

router.get("/", home);
router.get("/add_movie", add_movie);
router.get("/update_Movie", edit_movie);
router.get("/deleteMovie", deleteMovie);

router.post("/addMovie", uploadImg, addMovie)
router.post("/updateMovie", uploadImg, updateMovie)

module.exports = router