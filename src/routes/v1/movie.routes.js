const express = require("express");
const { movie_controller } = require("../../controllers");
const router = express.Router();

router.post("/create-movie", movie_controller.create_movies
);
module.exports = router;
