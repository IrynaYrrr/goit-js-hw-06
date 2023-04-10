/* Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

Используй массив объектов images для создания элементов <img> вложенных в <li>.
Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.*/


const images = [
  {
    class1: 'first',
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    class1: 'second',
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    class1: 'third',
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const container = document.querySelector('.gallery');


const markup = images.map(({class1, url, alt}) =>
`<li class=${class1}  >
 <img src=${url}
 alt=${alt}>
</li>`).join('');

container.insertAdjacentHTML('beforeend', markup);
console.dir(container);
