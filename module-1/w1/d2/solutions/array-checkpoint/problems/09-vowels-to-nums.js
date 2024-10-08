/*
Arrays and Mutability: Use what you have learned about arrays and mutability to
complete the problems below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/09-vowels-to-nums-spec.js
*/

// Define a function called vowelsToNums that takes in an array of characters.
// Return the same array of characters transformed in the following way: each
// character that corresponds to a character in the VOWELS array should be
// converted into the index of the equivalent character in the VOWELS array.
// Eg: If the input array is ["h", "e", "l", "l", "o"], then the function should return
// the input array which has been mutated to ["h", 1, "l", "l", 3].



/*

  ["h", "1", "l", "l", "3"];
         ^              ^

    0    1    2    3    4
  ["a", "e", "i", "o", "u"];

*/
let VOWELS = ["a", "e", "i", "o", "u"];


function vowelsToNums(characters) {

  for(let i = 0; i < characters.length; i++){
    let character = characters[i];
    // console.log(character)

    if(VOWELS.includes(character)){
      // console.log(character);
      let vowelIndex = VOWELS.indexOf(character);
      // console.log(character, vowelIndex, i);
      characters[i] = vowelIndex;
    }
  }
return characters;
}

// console.log(vowelsToNums(["h", "e", "l", "l", "o"])) //=> ["h", 1, "l", "l", 3]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelsToNums;
