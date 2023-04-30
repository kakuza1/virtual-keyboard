// create wrapper for keyboard
let wrapper = document.createElement('section');
wrapper.className = ('ki');
document.body.prepend(wrapper);



// [1][0]
// [1][14]
// [2][12]
// [3][0]
// [3][12]
// [4] - вся



// let Line = document.createElement('div');
// Line.className = ('key');
let out = ''
if (wrapper.childNodes.length < 5){
  for (let i = 0; i < 5; i++){
    out = '<div class= "Line" ></div>';
    document.querySelector('.ki').innerHTML += out;
  }
}
let lineArray = [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace']
,['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL']
,['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'" , 'Enter']
,['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',]
,['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→', 'FN']];
let changeKey = [13,14,28,29,41,42,54,55,56,57,58,59,60]

for ( let i = 0; i < 5; i++){

  for( let b = 0; b <lineArray[i].length; b++){
      out = '';
      for ( let c = 0; c < lineArray[i].length; c++){
         out += '<div class= "key" >'+ lineArray[i][c]+'</div>';
      }
      document.querySelectorAll('.Line')[i].innerHTML = out;
    }
}

// [1][14]
// [2][12]
// [3][0]
// [3][12]
// [4] - вся

// for(let hu = 0; hu < lineArray[0].length; hu++){
  //   document.querySelectorAll('.Line')[0].innerHTML =
  //    '<div class= "key" >'+ lineArray[0][hu] +'</div>'
  
  // document.querySelectorAll('.Line')[i].innerHTML = lineArray[i]
  // function init(){
    //    let out = '';
    //    for ( let i = 0; i < lineArray[0].length; i++){
      //       out += '<div class= "key" >'+ lineArray[0][i]+'</div>';
      //    }
      //    document.querySelectorAll('.Line')[0].innerHTML = out;
      // }
      // init();
      
      // for ( let i = 0; i < wrapper.childNodes.length; i++){
        //   document.querySelector('.ki').append(Line);
        // }
        // while (wrapper.childNodes.length < 4) {
          //   document.querySelector('.ki').append(Line);
          // }
          
          // find charCode
          // document.onkeypress = function (event){
            //     // console.log (event)
  //     keyboard.push(event.charCode)
  //     console.log(keyboard)
  // }
  // const enKeyBoard = 
  // [
    //   113, 119, 101, 114, 116, 121, 117, 105, 111, 112,
    //   91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108,
    //   59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47
    // ]; // eng charCode
    
    // const ruKeyBoard = 
    // [
      //   1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093,
      //   1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083,1076, 1078,
      //   1101, 92, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46
      // ];
      
      // // create keyboard
      
      // document.querySelectorAll('.key')[13,14,28,29,41,42,54,55,56,57,58,59,60]

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