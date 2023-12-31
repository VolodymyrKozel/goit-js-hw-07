const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('input[type=number]');
let divs = '';
createBtn.addEventListener('click', () => {
  let amount = inputNumber.value;
  createBoxes(amount);
});
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  inputNumber.value = '';
  divBoxes.innerHTML = '';
  if (amount >= 1 && amount <= 100) {
    let size = 20;
    for (let i = 0; i < amount; i++) {
      console.log(`i ${i} amount ${amount}`);
      size += 10;
      divs += `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px"></div>`;
    }
    divBoxes.innerHTML += divs;
    divs = '';
  }
  return;
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
