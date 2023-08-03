
//Modelos que los controladores de movie va a utilizar
const models = require("../database/models");


// importo  los servicios
const { getUsersWithComments, getUserByEmail, creatNewUser } = require("./users.Service");
const { getMovies, getMovieByIdWithComments, getMoviesWithComments } = require('./movies.Service');



module.exports = {
    getMovies_: getMovies(models),
    getMovieByIdWithComments: getMovieByIdWithComments(models),
    getMoviesWithComments: getMoviesWithComments(models),
    creatNewUser: creatNewUser(models),
    getUserByEmail: getUserByEmail(models),
    getUsersWithComments: getUsersWithComments(models)
}