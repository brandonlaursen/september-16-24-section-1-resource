/*
Write a function called asciiToBinary that will take a string with ascii
characters and convert it to a binary string.
*/

// DO NOT MODIFY: Helper function that adds zeros to front of input, making each binary element "8-bit"
const addZeros = (str, newLength) => {
  if (str.length < newLength) {
    let newStr = str.padStart(newLength, '0');
    return newStr;
  }
};

const asciiToBinary = string => {
  //!!START
  // make array to store binary values
  const binArr = []

  // for every index in the string input..
  for (let i = 0; i < string.length; i++) {
    // convert the character to decimal
    let deci = string[i].charCodeAt()

    // convert the decimal to binary
    let bin = deci.toString(2)

    // add zeros to the front of the binary, in case the binary's length is less than 8
    let binBit = addZeros(bin, 8)

    // add 8-bit binary to binary array
    binArr.push(binBit)
  }

  // return binary array joined as a string
  return binArr.join("")

  // Alternative one-liner:
  // return string.split("").map(str => addZeros(str.charCodeAt().toString(2), 8)).join("");
  //!!END
}

// hint: make sure output is in 8-bit form

// console.log(asciiToBinary("b"))     // "01100010"
// console.log(asciiToBinary("hello")) // "0110100001100101011011000110110001101111"


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = asciiToBinary;
