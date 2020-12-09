require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

const movies = require("./bin/seeds");
const Movie = require("./models/Movie.model");

mongoose
  .connect("mongodb://localhost:27017/movies-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to Mongo! Database name: "${self.connection.name}"`);
  })
  .then(() => {
    Movie.insertMany(movies)
      .then((result) => console.log("FILMES INSERIDOS: ", result))
      .catch((err) => console.error(err));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", require("./routes/index"));

module.exports = app;
