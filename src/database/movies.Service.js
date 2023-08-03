
const getMovies = ({ movieModel }) => async () => {
  const movies = await movieModel.find().limit(30);
  return movies;
};

const getMovieByIdWithComments = ({ movieModel, commentModel }) => async (id_movie) => {
  const movie = await movieModel.findById(id_movie).select("title");
  const comments = await commentModel
    .find({ movie_id: movie._id })
    .select("text");
  const data = movie.toObject();
  data.comments_realized = comments;

  return data;
};

const getMoviesWithComments = ({ movieModel }) => async () => {
  ///forma1
  const movies = await movieModel
    .aggregate([
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "movie_id",
          as: "comments_realized",
        }

      }
    ]).limit(10)

  return movies;
};

module.exports = {
  getMovies,
  getMovieByIdWithComments,
  getMoviesWithComments,
};
