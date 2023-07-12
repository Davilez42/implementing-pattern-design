const movieModel = require("./models/movieScheme");
const commentModel = require("./models/commentScheme");
const getMovies = async () => {
  const movies = await movieModel.find().limit(30);
  return movies;
};

const getMovieWithComments = async (id_movie) => {
  const movie = await movieModel.findById(id_movie).select("title");
  const comments = await commentModel
    .find({ movie_id: movie._id })
    .select("text");
  //console.log(comments);
  const data = movie.toObject();
  data.comments_realized = comments;

  return data;
};

const getMoviesWithComments = async () => {
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
        
      },
      {$select:{text:1,title:1}}
    ])

  return movies;
};

module.exports = {
  getMovies,
  getMovieWithComments,
  getMoviesWithComments,
};
