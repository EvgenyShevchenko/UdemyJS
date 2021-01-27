"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const film1 = prompt('Один из последних просмотренных фильмов?',''),
      rating1 = prompt('На сколько оцените его?',''),
      film2 = prompt('Один из последних просмотренных фильмов?',''),
      rating2 = prompt('На сколько оцените его?','');

personalMoveDB.movies[film1] = rating1;
personalMoveDB.movies[film2] = rating2;  

