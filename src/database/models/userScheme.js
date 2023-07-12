const { Schema, model } = require("mongoose");
const userScheme = new Schema({
  name: { type: String },
  email:{type:String},
  password: { type: String },
});
const userModel = model("Users", userScheme);
module.exports = userModel;
