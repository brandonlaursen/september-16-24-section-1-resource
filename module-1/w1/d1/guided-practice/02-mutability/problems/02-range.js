/*
Define a function range(min, max) that takes in two number parameters. The
function should return an array containing an inclusive range of all numbers
from a minimum number to a maximum number. The first parameter should be the
minimum number for the range, and the second parameter should be the maximum
number for the range.  If the min number is greater than the max number then return
an empty array.

  understand the problem
  input: min 3,  max 10
  output: [ 3, 4, 5, 6, 7, 8, 9, 10 ]
  * how do we get from out input to our output?

  make a plan
  1. define a function takes in a min and a max
  2. define an array
  3. loop
    a. start --- min
    b. condition to stop --- max
    c. step --- i += 1
    * push i into the array
  4. return array

*/


function range(min, max) {

  // console.log(min, max);
  let arr = [];

  // start i at 3
  // loop as long as i is less than or equal to the max - 10
  // increment by 1 each time
  for(let i = min; i <= max; i++ ){
    // console.log(i);
    arr.push(i);
    // console.log(arr);
  }

  // console.log('after loop', arr);
  return arr;
}


// console.log('return of range(3, 10):',range(3, 10));    // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
// console.log(range(10, 3));    // []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = range;
