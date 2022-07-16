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
   let arr = expr.split('')
   let arr2 = []
   function change(numArr) {
      let arr3 = []
      let arr4 = []
      let arr5 = []
      let result = []
      let el2
      numArr.forEach((element) => {
         arr3.push(element.join(''))
         arr3.forEach((el, i) => {
            return el === '10' ? el2 = '.' : el === '11' ? el2 = '-' : el === '**' ? el2 = ' ' : el === '00' ? el2 = '' : el2 = ''
         })
         arr4.push(el2)
      })
       while (arr4.length > 0) {
         arr5.push(arr4.splice(0, 5).join(''))
      }
       
         for (let i = 0; i < arr5.length; i++) {
            if(arr5[i]==='     '){result.push(' ')}
         for (let key in MORSE_TABLE) {

            if (arr5[i] === key) {
               result.push(MORSE_TABLE[key])
            }

         }
      } 
      return result.join('')
   }
   while (arr.length > 0) {
      arr2.push(arr.splice(0, 2))
   }
   return change(arr2)
}

module.exports = {
    decode
}