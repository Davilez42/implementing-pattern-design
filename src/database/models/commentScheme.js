const { Schema, model, Types } = require("mongoose");

const commentScheme = new Schema(
  {
    _id: { type: Types.ObjectId },
    name: { type: String, ref: "users" },
    email: { type: String, require: true },
    movie_id: { type: Types.ObjectId, ref: "Movies" },
    text: { type: String, require: true },
    date: { type: Date, require: true },
  },
  { timestamps: true }
);
const commentsModel = model("Comments", commentScheme);
module.exports = commentsModel;
