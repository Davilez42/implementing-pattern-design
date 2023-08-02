
//Dependencias
const userService = require("../database/users.Service");
const movieService = require('../database/movies.Service');
const fs = require('fs');
const json = require("jsonwebtoken");


const { authPlatformGoogle } = require('./auth/authPlatformGoogle.controller')
const { getMovies, getCommentsMovie, getMoviesComments } = require('./content/movie.Controller')
const { getSerie } = require('./content/series.Controller')


/*Al exportar el modulo con los controladores, 
inyecto las dependencias que cada controlador va a utlizar
*/
module.exports = {
    getCommentsMovie: getCommentsMovie(movieService),
    getMoviesComments: getMoviesComments(movieService),
    getMovies: getMovies(movieService),
    getSerie: getSerie(fs, movieService),
    authPlatformGoogle: authPlatformGoogle(userService, json)
}