/* Define a function called sumArray that takes in an array of numbers and
returns the total sum of all the numbers.
*/

//!!START
function sumArray(array){
    let sum = 0;
    for(let nums of array){
        sum += nums
    }
    return sum
}
//!!END


// console.log(sumArray([1, 2]));        // => 3
// console.log(sumArray([5, 6, 4]));     // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30
// console.log(sumArray([]));            // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sumArray;