const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput(evt){
  span.textContent = evt.currentTarget.value;
  if(!evt.currentTarget.value) {
    span.textContent = 'Anonymous';
  };
};
