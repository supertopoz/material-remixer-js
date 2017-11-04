/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'one-hundred',
  1000: 'one-thousand',
  1000000: 'one-million',
  1000000000: 'one-billion',
  1000000000000: 'one-trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function (num) {
  
  // return my value as english words
  let arr = num.toString().split('');
  // get 1s
  let handleZeros = numbersToPlace[num]
  if(handleZeros !== undefined){
    return handleZeros;
  }
  result = {}
/*  result.d = numbersToWords[arr[arr.length -5]] + " thousand" // ten thousands
  console.log(result.d)*/
  result.a = numbersToWords[arr[arr.length -4]] + " thousand"
  result.b = numbersToWords[arr[arr.length -3]] + " hundred"
  result.c = numbersToWords[arr[arr.length -2] + arr[arr.length-1]] // pure tens
 
  if(result.c === undefined){
    result.c = numbersToWords[arr[arr.length -2]+0] +"-" +numbersToWords[arr[arr.length-1]] // mid tens
  }

  if(arr.length === 1){
    result.d = numbersToWords[arr[arr.length -1]] //ones
  }
  
  let sentence = "";
  for(var i in result){
    if(result[i] !== undefined){
      if(result[i].indexOf('undefined') === -1){
        if(result[i].indexOf('zero-') === -1){
          if(result[i].indexOf('-hundred') >=0){
            sentence += result[i]+ " and ";
          } else {
            sentence += result[i]+ " ";
          }
          
        }
      
    }
    }
  }
  return sentence;
};

console.log(Number.prototype.toEnglish(10200))


