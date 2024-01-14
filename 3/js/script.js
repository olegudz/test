/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv > img, .promo__adv > div');

adv.forEach(item => {
    item.remove();
});

document.querySelector('.promo__bg div').textContent = "драма";
document.querySelector('.promo__bg').style.background = 'url("img/bg.jpg") center center/cover no-repeat';


const list = document.querySelector('.promo__interactive-list');
let items = list.querySelectorAll('li');

items.forEach( item => { item.remove(); } );

movieDB.movies.sort();
movieDB.movies.forEach( (val, ind) => {
    list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${ind + 1} ${val}<div class="delete"></div></li>`);
});


