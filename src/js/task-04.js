let counterValue = 0;

const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');


buttonDec.addEventListener("click", handleClickDec);
buttonInc.addEventListener("click", handleClickInc);

function handleClickDec() {
  counterValue -= 1;
  console.log(counterValue);
  span.textContent = counterValue;
};

function handleClickInc() {
  counterValue += 1;
  span.textContent = counterValue;
};
