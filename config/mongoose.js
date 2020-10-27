//configuring mongo db
const mongoose = require("mongoose");
const env = require("../config/environment");

mongoose.connect(env.db_path, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongo DB"));

db.once("open", () => {
  console.log("Database connected!");
});

module.exports = db;
