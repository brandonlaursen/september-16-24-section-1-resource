/*
Write a function spiralOrder(matrix) that takes in a 2-dimensional array
(matrix) and returns an array containing the elements in spiral order.
*/


//!!START
let spiralOrder = (matrix) => {
    let res = []; // store result
    let colStart = 0;
    let colEnd = matrix[0].length - 1; // Account for one off index
    let rowStart = 0;
    let rowEnd = matrix.length - 1; // Account for one off index


    while (true) {
        // Left to right, traverse across columns
        for (let i = colStart; i <= colEnd; i++) {
            res.push(matrix[rowStart][i]); // Keep the row the same but change the column
        }
        rowStart++;

        // Don't let row start exceed row end
        // until result is found
        if (rowStart > rowEnd) {
            return res;
        }

        // Top to bottom, traverse across rows
        for (let i = rowStart; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd]); // Keep the column the same, change the row
        }
        colEnd--;

        // Right to left, traverse across columns
        for (let i = colEnd; i >= colStart; i--) {
            res.push(matrix[rowEnd][i]); // Keep the row the same, change the col
        }
        rowEnd--;

        // Bottom to top, traverse across rows
        for (let i = rowEnd; i >= rowStart; i--) {
            res.push(matrix[i][colStart]);// Keep the column the same, change the row
        }
        colStart++;

        //Stop loop: Don't let col end exceed col start
        if (colEnd < colStart) {
            return res;
        }
    }

    return res;
};
//!!END

// matrix = [[ 1, 2, 3],
//           [ 4, 5, 6],
//           [ 7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = spiralOrder;
