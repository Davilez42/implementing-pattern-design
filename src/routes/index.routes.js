const { Router } = require('express')
const controllers = require('../controller')
require('dotenv').config()



const auth = Router()
auth.post('/auth-recived', controllers.authPlatformGoogle)


const content = Router();
content.get('/', (req, res) => res.json({ message: "Welcomto to content" }))
content.get('/series/:name/temporada/:temp/episodio/:epis', controllers.getSerie)
content.get('/get-movies', controllers.getMovies)
content.get('/get-movies-with-coments', controllers.getMoviesComments)
content.get('/get-comments-movie/:id_movie', controllers.getCommentsMovie)



const approutes = Router()
approutes.use('/auth/', auth)
approutes.use('/content/', content)


module.exports = approutes
