/*
Loops and Conditionals: Use what you have learned about loops and conditionals
to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/06-even-num-halved-loop-spec.js
*/

// Define a function called evenNumHalvedLoop that takes in a number parameter.
// If the number is even, use a loop to keep halving the number until the number
// is odd, then return the number. If the number is odd, then return the number
// as it is.

function evenNumHalvedLoop(num) {
  if (num % 2 !== 0) return num;

  if (num === 0) return 0;

  while (num % 2 === 0) {
    num = num / 2;
    // console.log(num);
    // if (num % 2 !== 0) return num;
  };

  return num;
}

console.log(evenNumHalvedLoop(1000));
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = evenNumHalvedLoop;
