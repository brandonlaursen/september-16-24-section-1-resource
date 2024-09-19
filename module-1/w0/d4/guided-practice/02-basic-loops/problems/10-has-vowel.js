/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function hasVowel(word) {
  console.log('before loop')
  let number = 10;

  // console.log("5" * 23);
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    console.log(letter);
    if ("aeiouAEIOU".includes(letter)) {
      return true;
    }

  };
  console.log('after loop')
  return false;
}

console.log(hasVowel('dog'));          // => true
// console.log(hasVowel('conventional')); // => true
// console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
