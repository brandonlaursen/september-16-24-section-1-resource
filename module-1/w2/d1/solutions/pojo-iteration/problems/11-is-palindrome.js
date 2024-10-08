/*
Given a sentence, write a function called isPalindrome that returns true if the
sentence can be rearranged into a palindrome and false if not. Ignore whitespace
and assume all characters are lowercase.

Note: A palindrome is a sequence that reads the same backwards as is does
forward.
*/

const isPalindrome = sentence => {
  //!!START
  let map = {};
  for(let char of sentence) {
    if(char === ' ') continue;
    if(map[char]) {
      delete map[char];
    } else {
      map[char] = 1;
    }
  }
  return Object.keys(map).length < 2;
  //!!END
}

// console.log(isPalindrome('pop'));               // true;
// console.log(isPalindrome('kayak'));             // true
// console.log(isPalindrome('yo banana boy'));     // true
// console.log(isPalindrome('this is the truth')); // false
// console.log(isPalindrome('abab'));              // true
// // because 'abab' can be rearranged into a palindrome, 'abba'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = isPalindrome;
} catch {}
