/*
Given a sentence, write a function called isPalindrome that returns true if the
sentence can be rearranged into a palindrome and false if not. Ignore whitespace
and assume all characters are lowercase.

Note: A palindrome is a sequence that reads the same backwards as is does
forward.

  
let = {
'o': 1
}

    abab
let = {
}

*/

const isPalindrome = (sentence) => {
  let obj = {};

  for (let char of sentence) {
    // console.log(char);

    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      delete obj[char];
    }
  }

  console.log(obj);
  let count = Object.values(obj).length;
  // console.log(count);
  return count <= 1;
};

// console.log(isPalindrome('pop'));               // true;
// console.log(isPalindrome('kayak'));             // true
// console.log(isPalindrome('yo banana boy'));     // true
// console.log(isPalindrome('this is the truth')); // false
// console.log(isPalindrome('abab'));              // true
// because 'abab' can be rearranged into a palindrome, 'abba'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = isPalindrome;
} catch {}
