/*
Loops and Conditionals: Use what you have learned about loops and conditionals
to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/08-word-camel-spec.js
*/

// Define a function called wordCamel that takes in a lowercase string
// parameter and a number parameter. The function should return the string with
// the first character and every nth character after the first character
// capitalized, where n is the number parameter.

// For example, wordCamel('aaaaaa', 3) should return 'AaaAaa' because the first
// character and every third character after the first character gets
// capitalized.

// console.log(wordCamel('aaaaaa', 3)) //=> 'AaaAaa'
// console.log(wordCamel('bbbbb', 2)) //=> 'BbBbB'
// console.log(wordCamel('cccc', 1)) //=> 'CCCC'

function wordCamel(string, num) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (i % num === 0) {
      newString += letter.toUpperCase();
    } else {
      newString += letter;
    }
  };

  return newString;
}

console.log(wordCamel("aaaaaa", 3));
console.log(wordCamel('bbbbb', 2)) //=> 'BbBbB'
console.log(wordCamel('cccc', 1)) //=> 'CCCC'
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = wordCamel;
