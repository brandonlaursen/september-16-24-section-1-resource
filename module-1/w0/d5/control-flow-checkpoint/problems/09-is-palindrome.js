/*
Loops and Conditionals: Use what you have learned about loops and conditionals
to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/09-is-palindrome-spec.js
*/

// Define a function called isPalindrome that takes in a string of alphabetical
// characters as its parameter. Return true if the letters in the word read the
// same forwards and backwards.

// console.log(isPalindrome('kayak')) //=> true
// console.log(isPalindrome('deed')) //=> true
// console.log(isPalindrome('alma')) //=> false

// HINT: Check the first and last characters to see if they match. Then check
// the second and second-to-last characters to see if they match. And so on.
// For example, if the word is 'alma', check the first and last character. They
// are both 'a', so this word could be a palindrome. Next, check the second and
// second-to-last characters, i.e., 'l' and 'm', respectively. Since these two
// characters are different, this word cannot be a palindrome.
// Your code here


function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
  // return [...string].reverse().join('') === string;
}
//
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
    // console.log('helllo')
  }
    return true;
}

// console.log(isPalindrome('kayak')) //=> true
// console.log(isPalindrome('deed')) //=> true
// console.log(isPalindrome('alma')) //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isPalindrome;
