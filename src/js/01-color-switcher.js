const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.setAttribute('disabled', true);
let bgColor = null;

startBtn.addEventListener('click', changeBodyColor);
stopBtn.addEventListener('click', stopChangeBodyColor);

function changeBodyColor() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  bgColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBodyColor() {
  clearInterval(bgColor);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}
