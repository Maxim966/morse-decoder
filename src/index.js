const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newObj = {};
    let str = "";
  
    for (const key in MORSE_TABLE) {
      let newKeys = key.split("").map(item => {
        if(item === ".") {
          return "10";
        } else {
          return "11";
        }
      });
      
      let keysLengthTen = newKeys.join("").padStart(10, "0"); 
      newObj[keysLengthTen] = MORSE_TABLE[key]
    }
  
    for (let index = 0; index < expr.length; index+=10) {
      let tenPer = expr.slice(index, index + 10);
      if(newObj[tenPer]) {
        str+=newObj[tenPer];
      }else if(tenPer === "**********") {
        str+=" ";
      }
    }
  
    return str;
  }

module.exports = {
    decode
}