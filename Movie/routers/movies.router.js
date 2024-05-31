const { Router } = require('express');
const { home } = require('../controllers/movie.controller');


const router = Router();

router.get("/", home);

module.exports = router