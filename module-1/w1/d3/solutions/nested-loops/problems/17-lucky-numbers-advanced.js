/*
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array
(matrix) and returns all lucky numbers in any order. A lucky number is the
minimum element in its row and the maximum in its column.
*/


//!!START
function luckyNumbers(matrix) {
    // Store number of rows and columns
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const mins = []; // Store minimums in rows
    const maxes = []; // and maximums in columns

    for (let i = 0; i < numRows; i++) {
        mins[i] = matrix[i][0];
        for (let j = 0; j < numCols; j++) {
            if (matrix[i][j] < mins[i]) {
                mins[i] = matrix[i][j]; // Store minimum value in row
            }
            if (!maxes[j] || matrix[i][j] > maxes[j]) {
                maxes[j] = matrix[i][j]; // Store maximum value in column
            }
        }
    }

    const luckyNums = [];

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            // Find lucky numbers -> number at coordinates
            // matches number at indeces in min & max arrays
            if (matrix[i][j] === mins[i] && matrix[i][j] === maxes[j]) {
                luckyNums.push(matrix[i][j]);
            }
        }
    }

    return luckyNums;
}
//!!END

// matrix = [[ 5,  9, 21],
//           [ 9, 19,  6],
//           [12, 14, 15]]

// console.log(luckyNumbers(matrix)); // [12]

// matrix = [[ 5, 10,  8,  6],
//           [10,  2,  7,  9],
//           [21, 15, 19, 10]]

// console.log(luckyNumbers(matrix)); // [10]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = luckyNumbers;
