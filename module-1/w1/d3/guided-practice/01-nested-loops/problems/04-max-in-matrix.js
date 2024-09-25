/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/





function maxInMatrix(matrix) {

  // 11 > -Infinity
  let largestNum = -Infinity;

  for(let i  = 0; i < matrix.length; i++){
    let subArr = matrix[i];
    // console.log(subArr);

    for(let j = 0; j < subArr.length; j++){
      let number = subArr[j];
      // console.log("number:", number);

      if(number > largestNum) {
        largestNum = number;

      };
      // console.log("largestNum:", largestNum);
    }
  };

  return largestNum;
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
