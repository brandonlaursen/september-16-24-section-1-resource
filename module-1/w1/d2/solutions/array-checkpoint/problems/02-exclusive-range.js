/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/02-exclusive-range-spec.js
*/

// Define a function called exclusiveRange that takes in a minimum number and a
// maximum number as two parameters. Return an array containing all the numbers
// between the minimum and maximum numbers, not including the minimum and
// maximum numbers.
// Eg: If the minimum number is 2 and the maximum number is 5, then the function
// should return an array of [3, 4].

/*

  input: min - 2, max - 5
  output: [3,4]

  make a plan

  define a new array
  iterate
    start - min + 1
    condition - i < max
    step - i ++;
    push our value into the array
  return the array

*/

function exclusiveRange(min, max){

  let newArr = [];

  for(let i = min + 1; i < max; i++) {
    // console.log(i);
    newArr.push(i);
    // console.log(newArr);
  };

  return newArr;
};

// console.log(exclusiveRange(2, 5));//[3,4]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = exclusiveRange;
