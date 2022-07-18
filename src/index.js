const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

function decode(expr) {
   let arr1=[]
   let arr2=[]
   let result=[]
    let arr = expr.match(/.{1,2}/g)
 arr.forEach((el) => {
            return arr1.push(el === '10' ? el2 = '.' : el === '11' ? el2 = '-' : el === '**' ? el2 = ' ' : el === '00' ? el2 = '' : el2 = '')   
       })
    while (arr1.length > 0) {
          arr2.push(arr1.splice(0, 5).join(''))
       }
    for (let i = 0; i < arr2.length; i++) {
             if(arr2[i]==='     '){result.push(' ')}
          for (let key in MORSE_TABLE) {
             if (arr2[i] === key) {
                result.push(MORSE_TABLE[key])
             }
          }
    
    }
     return result.join('')
 }

module.exports = {
   decode
}