/*
Conditionals: Use what you have learned about conditionals to complete the
problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/02-fizz-buzz-spec.js
*/

// Define a function called fizzBuzz that takes in a number parameter. If
// the number is divisible by 3, but not by 5, then return 'Fizz'. If the number
// is divisible by 5, but not by 3, then return 'Buzz'. If the number is
// divisible by both 3 and 5, then return 'Fizzbuzz'. Otherwise, return the
// number as it is.

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Fizzbuzz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else {
    return num;
  };
};

// num % 3 === 0
// console.log(fizzBuzz(3)); // fizz
// console.log(fizzBuzz(5)); // buzz
// console.log(fizzBuzz(15)); //fizzbuzz
// console.log(fizzBuzz(17)); // 17

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;
