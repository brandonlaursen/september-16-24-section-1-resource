/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
  //!!START
  let highest = 0;

  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      let num = arr[j];

      if (num > highest) {
        highest = num;
      }
    }
  }
  return highest;
  //!!END
}

// matrix = [
//   [11, 2, -99],
//   [20, 19, 10],
//   [47, 72, 56],
// ];

// console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
