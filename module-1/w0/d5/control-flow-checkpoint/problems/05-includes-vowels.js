/*
Loops and Conditionals: Use what you have learned about loops and conditionals
to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/05-includes-vowels-spec.js
*/

// Define a function called includesVowels that takes in a string parameter. If
// the string contains any of the characters in the VOWELS variable, then return
// true. Otherwise, return false.
let VOWELS = "aeiouAEIOU";

function includesVowels(string) {
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    console.log(letter);
    if (VOWELS.includes(letter)) {
      return true;
    }
  }

  return false;
}

// console.log(includesVowels('hello'));// true
// console.log(includesVowels('fry'))
// console.log(includesVowels("Elk")); //true
// console.log(includesVowels("myths"));
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = includesVowels;
