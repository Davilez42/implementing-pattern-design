const { ObjectId } = require("mongodb");
const commentsModel = require("./models/commentScheme");

const getComments = async () => {
  const comments = await commentsModel.find();
  return comments
};

const getCommentsWithMovies=async()=>{
  const comments = await commentsModel.find()
  .populate({path:'movie_id',select:'title cast'})
  .select('name')//selecciono solo los campos que voy a usar
  return comments
}

module.exports = {
  getComments,
  getCommentsWithMovies
};
