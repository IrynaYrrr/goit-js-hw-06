const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInput);

function onInput(){
  spanEl.style.fontSize = inputEl.value + 'px';
}
