/* Write a function threeIncreasing that accepts an array of numbers as an
argument. The function should return a boolean indicating whether or not the
array contains three consecutive numbers in consecutive increasing order, like
7, 8, 9.
*/

//!!START
function threeIncreasing(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
            return true;
        }
    }
    return false;
}
//!!END


// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
// console.log(threeIncreasing([2, 7, 8, 9]));                 // true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
// console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeIncreasing;