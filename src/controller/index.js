
//Dependencias
const fs = require('fs');
const json = require("jsonwebtoken");
const services = require('../database')

const { authPlatformGoogle } = require('./auth/authPlatformGoogle.controller')
const { getMovies, getCommentsMovie, getMoviesComments } = require('./content/movie.Controller')
const { getSerie } = require('./content/series.Controller')


/*Al exportar el modulo con los controladores, 
inyecto el mismo servicio  que cada controlador va a utlizar
*/
module.exports = {
    getCommentsMovie: getCommentsMovie(services),
    getMoviesComments: getMoviesComments(services),
    getMovies: getMovies(services),
    getSerie: getSerie(fs, services),
    authPlatformGoogle: authPlatformGoogle(services, json)
}