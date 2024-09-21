/*
Conditionals: Use what you have learned about conditionals to complete the
problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/01-even-num-halved-spec.js
*/

// Define a function called evenNumHalved that takes in a number parameter. If
// the number is even, then return the number halved. If the number is odd, then
// return the number as it is.


function evenNumHalved(num){

  // console.log(num % 2 === 0);

  if(num % 2 === 0) return num / 2;
  return num;
};

// console.log(evenNumHalved(7))
// console.log(evenNumHalved(10))

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = evenNumHalved;
