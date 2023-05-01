// create wrapper for keyboard
const wrapper = document.createElement('section');
wrapper.className = ('wrapper');
const textInput = document.createElement('textarea');
textInput.className = ('text');
const about = document.createElement('div');
about.className = 'about';
about.innerHTML = 'Windows <br> клавиша смены языка FN (не работает)';
document.body.prepend(wrapper);
document.body.prepend(textInput);
document.body.prepend(about);
document.body.className = 'page';

// create Line for symbols

let out = '';
if (wrapper.childNodes.length < 5) {
  for (let i = 0; i < 5; i += 1) {
    out = '<div class= "Line" ></div>';
    document.querySelector('.wrapper').innerHTML += out;
  }
}
const lineArray = [
  ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→', 'FN'],
];

const enKeyBoard = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81,
  87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65,
  83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86,
  66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39,
];

for (let i = 0; i < 5; i += 1) {
  for (let b = 0; b < lineArray[i].length; b += 1) {
    out = '';
    for (let c = 0; c < lineArray[i].length; c += 1) {
      out += `<div class= "key" >${lineArray[i][c]}</div>`;
    }
    document.querySelectorAll('.Line')[i].innerHTML = out;
  }
}

function giveClass() {
  document.querySelectorAll('.key')[0].className = 'key tilda';
  document.querySelectorAll('.key')[13].className = 'key backspace';
  document.querySelectorAll('.key')[14].className = 'key tab';
  document.querySelectorAll('.key')[28].className = 'key del';
  document.querySelectorAll('.key')[29].className = 'key caps';
  document.querySelectorAll('.key')[41].className = 'key enter';
  document.querySelectorAll('.key')[42].className = 'key l-shift';
  document.querySelectorAll('.key')[54].className = 'key r-shift';
  document.querySelectorAll('.key')[55].className = 'key l-ctrl';
  document.querySelectorAll('.key')[56].className = 'key win';
  document.querySelectorAll('.key')[57].className = 'key alt';
  document.querySelectorAll('.key')[58].className = 'key space';
  document.querySelectorAll('.key')[59].className = 'key r-alt';
  document.querySelectorAll('.key')[60].className = 'key r-ctrl';
  document.querySelectorAll('.key')[64].className = 'key fn';
}
giveClass();

// add data-key for key
for (let i = 0; i < enKeyBoard.length; i += 1) {
  const keyElement = document.querySelectorAll('.key')[i];
  keyElement.setAttribute('data-key', enKeyBoard[i]);
}

const keys = document.querySelectorAll('.key');
// add mouse click on key
keys.forEach((key) => {
  function onMouseDown() {
    this.classList.add('active');
  }

  function onMouseUp() {
    this.classList.remove('active');
  }

  key.addEventListener('mousedown', onMouseDown);
  key.addEventListener('mouseup', onMouseUp);
});

// add animation when pressing key
function addActiveClass(event) {
  const keyActive = event.key.toUpperCase();
  const keyElement = Array.from(keys).find(
    (elem) => elem.innerText === keyActive,
  ) || Array.from(keys).find(
    (elem) => elem.dataset.key === String(event.keyCode),
  );
  if (keyElement) {
    keyElement.classList.add('active');
  }
}
// delete animation
function removeActiveClass(event) {
  const keyActive = event.key.toUpperCase();
  const keyElement = Array.from(keys).find(
    (elem) => elem.innerText === keyActive,
  ) || Array.from(keys).find(
    (elem) => elem.dataset.key === String(event.keyCode),
  );
  if (keyElement) {
    keyElement.classList.remove('active');
  }
}
document.addEventListener('keydown', addActiveClass);
document.addEventListener('keyup', removeActiveClass);
