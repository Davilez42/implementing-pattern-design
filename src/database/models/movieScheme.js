const { Schema, model, Types } = require("mongoose");

const movieScheme = new Schema(
  {
    _id: { type: Types.ObjectId, require: true },
    plot: { type: String },
    genres: [{ type: String }],
    runtime: { type: Number, require: true },
    rated: { type: String, require: true },
    cast: [{ type: String }],
    num_mflix_comments: { type: Number },
    poster: { type: String, require: true },
    title: { type: String, require: true },
    fullplot: { type: String, require: true },
    poster: [{ type: String }],
    release: { type: Date, required: true },
  },
  {
    timestamps: true,
    strictPopulate: false
  }
);

const movieModel = model("Movies", movieScheme);
module.exports = movieModel;
