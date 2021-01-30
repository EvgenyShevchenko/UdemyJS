"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMoveDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMoveDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGenres();

function detectPersonalLevel() {
    if (personalMoveDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMoveDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMoveDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Вы киноман');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoveDB);
    }
}

showMyDB(personalMoveDB.privat);