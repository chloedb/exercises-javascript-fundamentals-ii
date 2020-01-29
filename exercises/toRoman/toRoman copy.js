/**
 * Given a positive integer, returns a string containing that integer's
 * Roman numeral representation.
 *
 * We recommend doing this work in two iterations: first supporting only
 * additive Roman numerals and then adding support for subtractive
 * Roman numerals. See the README for details.
 *
 * @example
 * toRoman(1);   // => 'I'
 * toRoman(6);   // => 'VI'
 * toRoman(152); // => 'CLII'
 *
 * @param {number} num - An integer
 * @returns {string} The input integer's Roman numeral representation
 */
function toRoman(num) {
  let finalString = '';

  toRomanThousands(toRomanHundreds(toRomanTens(toRomanOnes(1))))
  
  if (num === 0) {
    return ones[0];
  }

function toRomanThousands(num) {
  let thousands = 'M';

  if (num >= 1000) {
    let amountOfThousands = num / 1000
    amountOfThousands = Math.floor(amountOfThousands)
    finalString = finalString + thousands.repeat(amountOfThousands)
    num = num - (1000 * amountOfThousands)
    return finalString
  }
}

function toRomanHundreds(num) {
  let hundreds = 'C';
  let fiveHundred = 'D';

  if (num >= 100 && num < 1000) {
    let amountOfHundreds = num / 100
    amountOfHundreds = Math.floor(amountOfHundreds)

    if (amountOfHundreds >= 5) {
      let amountOfFiveHundred = num / 500
      amountOfFiveHundred = Math.floor(amountOfFiveHundred) 
      finalString = finalString + fiveHundred.repeat(amountOfFiveHundred)
      num = num - (500 * amountOfFiveHundred)
    }
    else {
    finalString = finalString + (hundreds.repeat(amountOfHundreds))
    num = num - (100 * amountOfHundreds)
    }
    return finalString
  }

function toRomanTens(num) {
  let ten = 'X';
  let fifty = 'L';

  if (num >= 10 && num < 100) {
    let amountOfTens = num / 10;
    amountOfTens = Math.floor(amountOfTens);
      
    if (amountOfTens >= 5) {
      let amountOfFifty = num / 50
      amountOfFifty = Math.floor(amountOfFifty)
      finalString = finalString + fifty.repeat(amountOfFifty)
      num = num - (50 * amountOfFifty)
    }
    else {
      finalString = finalString + (ten.repeat(amountOfTens));
      num = num - (10 * amountOfTens);
      //console.log(ten.repeat(amountOfTens)) -- repeat strings
    }
  }
   return finalString
} 

function toRomanOnes(num) {
  let ones = [0,'I','II','III','IV', 'V','VI','VII','IIX','IX']
  if (num > 0 && num < 10) {
    //console.log(ones[num])
    finalString = finalString + ones[num]
  } 
  //console.log(finalString)
  return finalString
}

//I have to put them in this order for it to recognize the change in num
//after each run through of an if statement. is there a different way??
  

if (require.main === module) {
  console.log('Running sanity checks for toRoman:');
  console.log(toRoman(1) === 'I')
  console.log(toRoman(2) === 'II')
  console.log(toRoman(3) === 'III')
  console.log(toRoman(6) === 'VI')
  console.log(toRoman(15) === 'XV')
  console.log(toRoman(152) === 'CLII')
  console.log(toRoman(354) === 'CCCLIV')
  console.log(toRoman(501) === 'DI')
  console.log(toRoman(2222) === 'MMCCXXII')
  console.log(toRoman(0) === 0)
  
}

module.exports = toRoman;
