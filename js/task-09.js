function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

buttonColor.addEventListener('click', onClick);

function onClick(){
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
