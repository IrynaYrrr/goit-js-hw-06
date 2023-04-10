// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const categoriesCount = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesCount.length}`); // Number of categories: 3

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const listItem = document.querySelectorAll("#categories > li");
listItem.forEach(item => {
  const titleText = item.querySelector('h2');
    console.log(`Category: ${titleText.textContent}`);
      const listCount = item.querySelectorAll('ul > li');
      console.log(`Elements: ${listCount.length}`);
});
