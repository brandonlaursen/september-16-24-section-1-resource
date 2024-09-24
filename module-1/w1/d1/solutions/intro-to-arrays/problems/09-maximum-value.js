/*
Define a function called maxVal that takes in an array of numbers as a
parameter. The function should return the largest number of the array. If the
array is empty, the function should return null.
*/

//!!START
function maxVal(array){
    if(!array.length) return null
    let max = -Infinity;
    for(let val of array){
        if(val > max) max = val;
    }
    return max;
}
//!!END


// console.log(maxVal([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxVal([-2, -3, -7, 3 ]));    // 3
// console.log(maxVal([]));                  // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxVal;