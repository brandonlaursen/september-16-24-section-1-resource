/*
Write a function called countCharacters(str) that takes in a string and returns
an object with all the characters in the string as keys and the frequency that
the characters show up in the string as values.
*/

function countCharacters(str) {
  //!!START
  let count = {};
  for (let char of str) {
    if (!(char in count)) count[char] = 0;
    count[char]++;
  }
  return count;
  //!!END
}

// console.log(countCharacters('hello')); // => { h: 1, e: 1, l: 2, o: 1}


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = countCharacters;
} catch {}
