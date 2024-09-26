/*
A 2-dimensional array is also known as a "matrix".
Write a function matrixAddition that accepts two matrices as arguments.
The two matrices are guaranteed to have the same "height" and "width".
The function should return a new matrix representing the sum of the two
arguments.
To add matrices, we add the values at the same positions.
*/

// Your code here

let matrixA = [
  [2, 5],
  [4, 7],
];
let matrixB = [
  [9, 1],
  [3, 0],
];

// let matrixC = [
//   [-1, 0],
//   [0, -1],
// ];
// let matrixD = [
//   [2, -5],
//   [7, 10],
//   [0, 1],
// ];

// let matrixE = [
//   [0, 0],
//   [12, 4],
//   [6, 3],
// ];

function matrixAddition(matrix1, matrix2) {
  // console.log(matrix1, matrix2);
  // [ [ 2, 5 ], [ 4, 7 ] ]
  // [ [ 9, 1 ], [ 3, 0 ] ]
  // [ [11,  6], [7,  7]  ]
  let result = [];
  for (let i = 0; i < matrix1.length; i++) {
    let subArr1 = matrix1[i];
    // console.log("subArr1:", subArr1);
    let subArr2 = matrix2[i];
    // console.log("subArr2:", subArr2);
    if(subArr2[0] === undefined ) {

    }
    let sum1 = subArr1[0] + subArr2[0];
    let sum2 = subArr1[1] + subArr2[1];
    result.push([sum1, sum2] )

  };

  return result;
}

// console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
// console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
// console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
// console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = matrixAddition;
