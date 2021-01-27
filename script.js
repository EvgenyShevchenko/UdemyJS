"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMoveDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMoveDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMoveDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Вы киноман');
}

console.log(personalMoveDB);