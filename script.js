"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
let personalMovieDB = {};

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

let lastMoviesName = prompt('Один из последних просмотренных фильмов?','');
let lastMoviesNameRating = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastMoviesName] = lastMoviesNameRating;

lastMoviesName = prompt('Один из последних просмотренных фильмов?','');
lastMoviesNameRating = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastMoviesName] = lastMoviesNameRating;

console.log(personalMovieDB);