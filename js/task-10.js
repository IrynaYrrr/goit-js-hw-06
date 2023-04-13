function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//  const amount = input.value;

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');


buttonCreate.addEventListener('click', buttonClick);
buttonDestroy.addEventListener('click', destroyBoxes);

function buttonClick() {
  const amount = Number(input.value);
  createBoxes(amount)
}

function createBoxes(amount) {
   for(let i = 0; i < amount; i+=1) {
    const divBox = document.createElement('div');
    divBox.classList.add('box');

    const allDivs = document.querySelectorAll('.box');
    const lastDiv = allDivs[allDivs.length - 1];

    if (lastDiv) {
      const size = Number(lastDiv.style.width.replace('px', '')) + 10;
      divBox.style.width = `${size}px`;
      divBox.style.height = `${size}px`;
    }
    else {
      divBox.style.width = '30px';
      divBox.style.height = '30px';
    }

    divBox.style.backgroundColor = getRandomHexColor();
    boxes.append(divBox);
   }
}

function destroyBoxes(){
  const divRem = document.querySelectorAll('.box');
  for(const d of divRem){
    d.remove();
  }
}
