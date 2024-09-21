/*
Loops and Conditionals: Use what you have learned about loops and conditionals
to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/07-fizz-buzz-range-spec.js
*/

// Define a function called fizzBuzzRange that takes in two number parameters.
// The first parameter defines the starting number of a range of numbers; the
// second parameter defines the ending number of that range. Build a
// comma-delimited string where each number in the range is added to the string.
// However, if the Fizz-Buzz logic from the problems/02-fizz-buzz.js file calls
// for the number to be transformed, then instead of the number, 'Fizz',
// 'Buzz', or 'Fizzbuzz' should take the place of that number.

// For example, fizzBuzzRange(3, 5) should return 'Fizz, 4, Buzz'. The range of
// numbers added to the comma-delimited string should be '3, 4, 5', but 3 gets
// transformed into 'Fizz' and 5 gets transformed into 'Buzz' using the
// Fizz-Buzz logic.
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Fizzbuzz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else {
    return num;
  }
}

function fizzBuzzRange(start, end) {
  let newString = "";

  for (let i = start; i <= end; i++) {
    let num = i;

    if (num % 3 === 0 && num % 5 === 0) {
      // return "Fizzbuzz";
      newString += "Fizzbuzz";
    } else if (num % 5 === 0) {
      // return "Buzz";
      newString += "Buzz";
    } else if (num % 3 === 0) {
      newString += "Fizz";
    } else {
      newString += `${num}`;
    }
    if (i === end) break;
    newString += `, `;
  }
  return newString;
}

// console.log(fizzBuzzRange(3, 5)); // 'Fizz, 4, Buzz'
// OPTIONAL CHALLENGE: Copy the entire fizzBuzz function in
// problems/02-fizz-buzz.js to the top of this file. Then use the fizzBuzz
// function as a helper function instead of repeating the Fizz-Buzz logic again
// in the fizzBuzzRange function.

function fizzBuzzRange(start, end) {
  let newString = "";

  for (let i = start; i <= end; i++) {
    let num = i;
    let result = fizzBuzz(num);

    newString += result;

    if (i === end) break;
    newString += `, `;
  }
  return newString;
}
// let result = fizzBuzz(3, 5);
// console.log(result);

console.log(fizzBuzzRange(3, 5));
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzzRange;
