/*
Write a function called binaryToDecimal that will convert a binary string into a
decimal number.
*/

const binaryToDecimal = binary => {
  //!!START
  // remove "0b" from string input
  const newBin = binary.substring(2);

  // convert new binary string to decimal
  const deci = parseInt(newBin, 2);

  // return decimal
  return deci;

  // Alternative one-liner:
  // return parseInt(binary.substring(2), 2);
  //!!END
}

// console.log(binaryToDecimal("0b10001000")) // 136
// console.log(binaryToDecimal("0b01010101")) // 85


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = binaryToDecimal;
