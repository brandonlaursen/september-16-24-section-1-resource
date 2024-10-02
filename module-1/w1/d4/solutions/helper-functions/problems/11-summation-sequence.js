/*
Write a function findSummation(number) that returns the number's summation.
A number's summation is the sum of all positive numbers less than or equal to
the number.
For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, the summation of 6
is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21.

Write a function summationSequence(start, length) that takes in two numbers:
start and length.
The function should return an array containing length total elements.
The first number of the sequence should be the start number.
At any point, to generate the next element of the sequence we take the summation
of the previous element.
You can assume that length is not zero.
Use the findSummation function as a helper function.
*/

//!!START
function findSummation(number) {
  let summation = number;
  for (let i = 1; i < number; i++) {
    summation += i;
  }

  return summation;
}

function summationSequence(start, length) {
  let seq = [start];

  for (let i = 1; i < length; i++) {
    let prev = seq[i - 1];
    let current = findSummation(prev);
    seq.push(current);
  }

  // alt solve
  // for (let i = seq.length; i < length; i++) {
  //     seq.push(findSummation(seq[seq.length - 1]));
  // }

  return seq;
}
//!!END

// console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
// console.log(summationSequence(5, 3)); // [5, 15, 120]
// console.log(summationSequence(1, 2)); // [ 1, 1 ]
// console.log(summationSequence(6, 1)); // [ 6 ]
// console.log(summationSequence(2, 3)); // [ 2, 3, 6 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  findSummation,
  summationSequence,
};
