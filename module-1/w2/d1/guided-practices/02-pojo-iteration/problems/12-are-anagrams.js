/*
Write a function called areAnagrams that takes in two words and returns a
boolean indicating whether or not the words are anagrams. Anagrams are words
that contain the same characters but not necessarily in the same order.

CHALLENGE: Can you do it with just one object?


  "", "camp"
*/

// let obj = {'test': 1}

// console.log(delete obj['test'])
let areAnagrams = (word1, word2) =>
  Object.values(
    [...word1.concat(word2)]
    .reduce(
      (acc, char) => (acc[char] ? delete acc[char] : (acc[char] = 1), acc),
      {}
    )
  ).length === 0

// function areAnagrams(word1, word2) {
//   let obj = {};

//   let string = word1.concat(word2);

//   for (let char of string) {

//   if (obj[char]) {
//     delete obj[char];
//   } else {
//     obj[char] = 1;
//   }
// };

//   return Object.values(obj).length === 0;
// }

// console.log(areAnagrams("cat", "act")); // true
console.log(areAnagrams("restful", "fluster")); // true
// console.log(areAnagrams("cat", "dog"));          // false
// console.log(areAnagrams("boot", "bootcamp")); // false
// console.log(areAnagrams('bott', 'boot'));        // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = areAnagrams;
} catch {}
