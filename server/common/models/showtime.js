"use strict";

const app = require("../../server/server");
const _ = require("lodash");

module.exports = function(Showtime) {
  Showtime.afterRemote("findById", async ctx => {
    const result = ctx.result;
    console.log(result);
    const Cinema = app.models.Cinema;
    const Movie = app.models.Movie;

    const cineId = result.__data.cinemaId;
    const movieId = result.__data.movieId;

    const cinedata = await Cinema.find({ where: { id: cineId } });
    const moviedata = await Movie.find({ where: { id: movieId } });

    result.__data.cinemaName = cinedata[0].branchname;
    result.__data.movieName = moviedata[0].name;
  });
};
