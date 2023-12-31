const btnChangeColor = document.querySelector('.change-color');
const bodySelect = document.querySelector('body');
const spanColor = document.querySelector('.color');
btnChangeColor.addEventListener('click', handleChangeColor);
function handleChangeColor() {
  let randomColor = getRandomHexColor();
  bodySelect.style.backgroundColor = randomColor;
  spanColor.textContent = `hex: ${randomColor} ${hexToRgb(randomColor)}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )})`
    : /* {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } */ null;
}
