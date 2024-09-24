/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/01-avg-value-spec.js
*/

// Define a function called avgValue that takes in an array of numbers. Return
// the average number value of all the numbers in the array.

/*

  input: [1, 2, 3, 5, 6, 7]
  output: 4
  1 + 2 + 3 + 5 + 6 + 7 = 24
  24 / 6 = 4
  * sum of the values in the array divided by the length of the array

  define a sum variable to track sum
  iterate through the array
    start - 0
    condition -  i < numbers.length
    step - i++
    grab the number at the current index
    take the number and it to our sum
  return sum divided array divided by the length of the array

*/

function avgValue(numbers){

  if(numbers.length === 0) return 0;
  // if(!numbers.length) return 0;

  let sum = 0;

  for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];

    // console.log(number);
    sum += number;
    // console.log(number, sum);
  };

  // console.log(sum, numbers.length, 0 / 0)
  return sum / numbers.length;
};


// console.log(avgValue([1, 2, 3, 5, 6, 7]));// 4
// console.log(avgValue([]) );// 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgValue;
