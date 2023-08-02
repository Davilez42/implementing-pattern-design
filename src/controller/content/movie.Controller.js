
//Modelos que los controladores de movie va a utilizar
const movieModel = require("../../database/models/movieScheme");
const commentModel = require("../../database/models/commentScheme");

//Aplicando currying para implementar la inyeccion de dependencias

const getMovies = (moviesService) => async (req, res) => {
    try {
        const movies_db = await moviesService.getMovies(movieModel)
        res.status(200).json(movies_db)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal error server !" })
    }
}

const getCommentsMovie = (moviesService) => async (req, res) => {
    const { id_movie } = req.params
    console.log(id_movie);
    try {
        const movieComments_db = await moviesService.getMovieWithComments(movieModel, commentModel)(id_movie)

        res.status(200).json(movieComments_db)
    } catch (e) {
        return res.status(500).json({ message: "Internal error server !" })
    }
}

const getMoviesComments = (moviesService) => async (req, res) => {

    try {
        const movieComments_db = await moviesService.getMoviesWithComments(movieModel)

        res.status(200).json(movieComments_db)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal error server !" })
    }
}

module.exports = {
    getMovies,
    getMoviesComments,
    getCommentsMovie
}