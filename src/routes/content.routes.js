const { Router } = require("express");

const content = Router();
const controllers = require('../controller/')





content.get('/', (req, res) => res.json({ message: "Welcomto to content" }))

content.get('/series/:name/temporada/:temp/episodio/:epis', controllers.getSerie)

content.get('/get-movies', controllers.getMovies)

content.get('/get-movies-with-oments', controllers.getMoviesComments)

content.get('/get-comments-movie/:id_movie', controllers.getCommentsMovie)

module.exports = content