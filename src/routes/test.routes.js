const { Router } = require("express");
const commentsService = require("../database/comments.Service");
const moviesService = require("../database/movies.Service");
const usersService = require("../database/users.Service");
//implentacion de redis
const getConectionRedis = require('../database/connectionRedis')


const router = Router();

router
  .get("/getcomments", async (req, res) => {
    try {
      const client = getConectionRedis()
      await client.connect()

      const value = await client.get("comments")
      if (!value) {
        const comments_db = await commentsService.getComments();
        client.set("comments", JSON.stringify(comments_db));
        client.disconnect()
        return res.status(200).json(comments_db);
      }

      const comments_redis = await client.get("comments");
      client.disconnect()
      res.status(200).json(comments_redis);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  .get("/getmovies", async (req, res) => {
    try {
      const movies_db = await moviesService.getMovies();
      res.status(200).json(movies_db);
    } catch (error) {}
  })

  .get("/getCommentsWithMoves", async (req, res) => {
    try {
      const comments_db = await commentsService.getCommentsWithMovies();
      res.status(200).json(comments_db);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  .get("/getMovieWithComments/:id_movie", async (req, res) => {
    try {
      const { id_movie } = req.params;
      const movie_db = await moviesService.getMovieWithComments(id_movie);
      res.status(200).json(movie_db);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  .get("/getMoviesWithComments", async (req, res) => {
    try {

      const movies_db = await moviesService.getMoviesWithComments();
      res.status(200).json(movies_db);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
