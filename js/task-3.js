const input = document.querySelector('#name-input');
const spanOut = document.getElementById('name-output');
const handleInput = e => {
  let trimValue = e.target.value.trim();
  trimValue === '' || trimValue === ' '
    ? (spanOut.textContent = 'Anonymous')
    : (spanOut.textContent = e.target.value);
};
input.addEventListener('input', e => handleInput(e));
