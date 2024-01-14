/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

const movieDB = {
    movies: []
};

const form = document.querySelector('form.add');
const btn = form.querySelector('button');

const list = document.querySelector('.promo__interactive-list');
const items = list.querySelectorAll('li');

const inputAdd = document.querySelector('.adding__input');



function readList() {
    const items = list.querySelectorAll('li');
    items.forEach(element => {
        movieDB.movies.push(element.textContent.trim().toUpperCase());
    });
    movieDB.movies.sort();
}


function writeList() {
    list.innerHTML = '';
    movieDB.movies.forEach((val) => {
        list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${val}<div class="delete"></div></li>`);
    });
}

function addValueList(value) {
    movieDB.movies = [];

    value = value.trim().toUpperCase();

    if (value.length === 0) return;

    if (value.length > 21) {
        value = value.slice(0, 21) + '...';
    }

    movieDB.movies.push(value);
    
    readList();
    writeList();
}


btn.addEventListener('click', event => {
    event.preventDefault();
    addValueList(inputAdd.value);

    const YES = document.querySelector('input[type=checkbox]');
    if (YES.checked) {
        console.log("Добавляем любимый фильм");
    }
});


list.addEventListener('click', event => {
    if (event.target.classList.contains('delete')) {
         event.target.parentElement.remove();
    }
   
})