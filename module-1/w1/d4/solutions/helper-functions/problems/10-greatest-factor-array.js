/*
Write a function greatestFactor(num) that takes in a number and returns the
greatest factor of that number.

A greatest factor is the largest number that divides into the number with no
remainder. The factor cannot be the same number as the number itself.
For example, the greatest factor of 16 is 8.

Write a function greatestFactorArray(numbers) that takes in an array of numbers
and returns a new array where every EVEN number is replaced with it's greatest
factor. Use the greatestFactor function as a helper function.
*/

//!!START
function greatestFactor(number) {
  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) return i;
  }

  return number;
}

function greatestFactorArray(numbers) {
  let greatestFactors = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 == 0)
      greatestFactors.push(greatestFactor(number));
    else
      greatestFactors.push(number);
  }

  return greatestFactors;
}
//!!END

// console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
// console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5];
// console.log(greatestFactorArray([1, 2, 3, 4, 5])); // [1, 2, 3, 2, 5 ]
// console.log(greatestFactorArray([10, 20, 30, 40, 50])); // [5, 10, 15, 20, 25 ]
// console.log(greatestFactorArray([23, 43, 54, 65, 12])); // [23, 43, 27, 65, 6 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  greatestFactor,
  greatestFactorArray
};
