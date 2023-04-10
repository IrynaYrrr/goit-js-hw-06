function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector('.change-color');
const body = document.querySelector('body');

buttonColor.addEventListener('click', onClick);

function onClick(){
  body.style.backgroundColor = getRandomHexColor();
}
