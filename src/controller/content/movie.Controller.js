

//Aplicando currying para implementar la inyeccion de dependencias

const getMovies = ({ getMovies_ }) => async (req, res) => {
    try {
        const movies_db = await getMovies_()
        res.status(200).json(movies_db)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal error server !" })
    }
}

const getCommentsMovie = ({ getMovieByIdWithComments }) => async (req, res) => {
    const { id_movie } = req.params
    console.log(id_movie);
    try {
        const movieComments_db = await getMovieByIdWithComments(id_movie)

        res.status(200).json(movieComments_db)
    } catch (e) {
        return res.status(500).json({ message: "Internal error server !" })
    }
}

const getMoviesComments = ({ getMoviesWithComments }) => async (req, res) => {
    try {
        const movieComments_db = await getMoviesWithComments()

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