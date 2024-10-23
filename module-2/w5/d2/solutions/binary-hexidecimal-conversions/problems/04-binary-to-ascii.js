/*
Write a function called binaryToASCII that will convert a binary string into an
ASCII character.
*/

const binaryToAscii = binary => {
  //!!START
  // remove "0b" from string input
  const newBin = binary.substring(2)

  // convert new binary string to decimal
  const deci = parseInt(newBin, 2)

  // convert decimal to ascii char
  const ascii = String.fromCharCode(deci)

  // return ascii
  return ascii

  // Alternative one-liner:
  // return String.fromCharCode(bin);
  //!!END
}

// console.log(binaryToAscii("0b01100001")) // "a"
// console.log(binaryToAscii("0b00100100")) // "$"
// console.log(binaryToAscii("0b01111110")) // "~"


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = binaryToAscii;
