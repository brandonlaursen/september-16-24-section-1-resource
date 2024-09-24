/*
Write a function adjacentSum that takes in an array of numbers and returns a new
array containing the sums of adjacent numbers in the original array. See the
examples.
*/

//!!START
function adjacentSum(nums){
    const newArr = [];
    let pointer1 = 0;
    let pointer2 = 1;

    for(let i = pointer1; i < nums.length; pointer1++){
        if(nums[pointer2] === undefined) return newArr
        newArr.push(nums[pointer1] + nums[pointer2]);
        pointer2++
    }
}
//!!END


// console.log(adjacentSum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
// console.log(adjacentSum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = adjacentSum;