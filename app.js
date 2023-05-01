// create wrapper for keyboard
let wrapper = document.createElement('section');
wrapper.className = ('wrapper');
let textInput = document.createElement('textarea');
textInput.className = ('text')
let about = document.createElement('div');
about.className = 'about'
about.innerHTML = 'Windows <br> клавиша смены языка FN (не работает)';
document.body.prepend(wrapper);
document.body.prepend(textInput);
document.body.prepend(about)
document.body.className = 'page'

// create Line for symbols

let out = ''
if (wrapper.childNodes.length < 5){
  for (let i = 0; i < 5; i++){
    out = '<div class= "Line" ></div>';
    document.querySelector('.wrapper').innerHTML += out;
  }
}
const lineArray = [
  ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→', 'FN']
];

const enKeyBoard = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81,
  87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65,
  83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86,
  66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39
];

const keyMap = {
  65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g', 72: 'h',
  73: 'i', 74: 'j', 75: 'k', 76: 'l', 77: 'm', 78: 'n', 79: 'o', 80: 'p',
  81: 'q', 82: 'r', 83: 's', 84: 't', 85: 'u', 86: 'v', 87: 'w', 88: 'x',
  89: 'y', 90: 'z', 48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5',
  54: '6', 55: '7', 56: '8', 57: '9', 186: ';', 187: '=', 188: ',', 189: '-',
  190: '.', 191: '/', 219: '[', 220: '\\', 221: ']', 222: '\'', 8: 'backspace',
  9: 'tab', 13: 'enter', 16: 'shift', 17: 'ctrl', 18: 'alt', 20: 'capslock',
  27: 'esc', 32: 'spacebar', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home',
  37: 'leftarrow', 38: 'uparrow', 39: 'rightarrow', 40: 'downarrow', 45: 'insert',
  46: 'delete', 91: 'leftwindowkey', 92: 'rightwindowkey', 93: 'selectkey', 255: 'FN'
};


for ( let i = 0; i < 5; i++){

  for( let b = 0; b <lineArray[i].length; b++){
      out = '';
      for ( let c = 0; c < lineArray[i].length; c++){
         out += '<div class= "key" >'+ lineArray[i][c]+'</div>';
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
giveClass()

// add data-key for key
for (let i = 0; i < enKeyBoard.length; i++) {
  let keyElement = document.querySelectorAll('.key')[i];
  keyElement.setAttribute('data-key', enKeyBoard[i]);
}

const keys = document.querySelectorAll('.key');
// add mouse click on key 
keys.forEach(key => {
  key.addEventListener('mousedown', function() {
    this.classList.add('active');
  });

  key.addEventListener('mouseup', function() {
    this.classList.remove('active');
  });
});
// add animation when pressing key
function addActiveClass(event) {
  const keyActive = event.key.toUpperCase();
  const keyElement = Array.from(keys).find(elem => elem.innerText === keyActive) || Array.from(keys).find(elem => elem.dataset.key === String(event.keyCode));
  if (keyElement) {
    keyElement.classList.add('active');
  } 
}
// delete animation
function removeActiveClass(event) {
  const keyActive = event.key.toUpperCase();
  const keyElement = Array.from(keys).find(elem => elem.innerText === keyActive) || Array.from(keys).find(elem => elem.dataset.key === String(event.keyCode));
  if (keyElement) {
    keyElement.classList.remove('active');
  } 
}
document.addEventListener('keydown', addActiveClass);
document.addEventListener('keyup', removeActiveClass);

