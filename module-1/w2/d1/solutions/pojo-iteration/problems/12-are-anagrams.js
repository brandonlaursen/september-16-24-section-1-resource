/*
Write a function called areAnagrams that takes in two words and returns a
boolean indicating whether or not the words are anagrams. Anagrams are words
that contain the same characters but not necessarily in the same order.

CHALLENGE: Can you do it with just one object?
*/

function areAnagrams(word1, word2) {
  //!!START
  let count = {};
  for (let char of word1) {
    if (!(char in count)) count[char] = 0;
    count[char]++;
  }

  for (let char of word2) {
    if (!(char in count)) count[char] = 0;
    count[char]--;
    if (count[char] === 0) delete count[char];
  }

  return Object.keys(count).length === 0;
  //!!END
}

// console.log(areAnagrams("cat", "act"));          // true
// console.log(areAnagrams("restful", "fluster"));  // true
// console.log(areAnagrams("cat", "dog"));          // false
// console.log(areAnagrams("boot", "bootcamp"));    // false
// console.log(areAnagrams('bott', 'boot'));        // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = areAnagrams;
} catch {}
