/*
Write a function called hexadecimalToDecimal that will convert a hexadecimal
string into a decimal number.
*/

const hexadecimalToDecimal = hexa => {
  //!!START
  // remove "0x" from string input
  const newHexa = hexa.substring(2);

  // convert new binary string to decimal
  const deci = parseInt(newHexa, 16);

  // return decimal
  return deci;

  // Alternative one-liner:
  // return parseInt(hexa.substring(2), 16);
  //!!END
}

// console.log(hexadecimalToDecimal("0xf"))   // 15
// console.log(hexadecimalToDecimal("0x1F9")) // 505


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hexadecimalToDecimal;
