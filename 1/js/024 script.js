/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let personalMovieDB = {
    count: 2,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    },

    showMyDB: function () {
        if (this.privat === false)
            console.log(this);

    },

    start: function () {
        let numberOfFilms;
        do {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');
        } while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms))

        this.count = numberOfFilms;
    },


    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {

            let question;

            do {
                question = prompt(`Ваш любимый жанр под номером ${i}`);
            } while (question == null || question == '')

            this.genres.push(question);
        }

        this.genres.forEach(
            function (value, index) {
                alert(`Любимый жанр ${index + 1} - это ${value}`);
            }
        );


    },


    rememberMyFilms: function () {
        let question, answer;

        for (let i = 0; i < this.count; i++) {
            do {
                question = prompt('Один из последних просмотренных фильмов?');
                answer = prompt('На сколько оцените его?');
                console.log(Number.isNaN(answer));
            } while (question == null || question == '' || answer == null || answer == '' || question.length > 50 || !isNumeric(answer))

            this.movies[question] = answer;

        }

    },


    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    }
}

function isNumeric(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};


