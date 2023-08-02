const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.URI_MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Established");
    mongoose.connection.on("open", (_) => {
      console.log("Open new connection");
    });
    mongoose.connection.on("error", () => console.log("error"));
  })
  .catch((err) => console.log("Connection Error Mongo DB"));
module.exports = mongoose;
