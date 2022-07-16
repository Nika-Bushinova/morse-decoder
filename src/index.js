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
    let arr2 = expr.split('')
    let arr = []
    function change(numArr) {
       let resultF = []
       let result = []
       let result3 = []
       let result4 = []
       result5 = []
       let el2
       numArr.forEach((element) => {
          resultF.push(element.join(''))
          resultF.forEach((el, i) => {
             return el === '10' ? el2 = '.' : el === '11' ? el2 = '-' : el === '**' ? el2 = ' ' : el === '00' ? el2 = '' : el2 = ''
          })
          result.push(el2)
       })
        while (result.length > 0) {
          result4.push(result.splice(0, 5).join(''))
       }
        
          for (let i = 0; i < result4.length; i++) {
             if(result4[i]==='     '){result5.push(' ')}
          for (let key in MORSE_TABLE) {
 
             if (result4[i] === key) {
                result5.push(MORSE_TABLE[key])
             }
 
          }
       } 
       return result5.join('')
    }
    while (arr2.length > 0) {
       arr.push(arr2.splice(0, 2))
    }
    return change(arr)
 }

module.exports = {
    decode
}