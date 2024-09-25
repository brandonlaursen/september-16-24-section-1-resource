/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {
  // Your code here

  let height = matrix.length;
  let width = matrix[0].length;
  let result = [];

  for (let col = 0; col < width; col++) {
    let colMax = matrix[0][col];
    // console.log('before inner loop',colMax);

    for (let row = 0; row < height; row++) {
      // let number = matrix[col][row];
      let number = matrix[row][col];
      // console.log(number)
      if (number > colMax) {
        colMax = number;
      }
      // console.log('in inner loop',colMax)
    }
    // console.log('after inner loop', colMax)
    result.push(colMax);
  }

  return result;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
