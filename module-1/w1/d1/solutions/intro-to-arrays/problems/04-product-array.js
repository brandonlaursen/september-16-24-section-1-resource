/*
Write a function product(nums) that takes in an array of numbers. The function
should return the total product of multiplying all numbers of the array
together. You can assume that nums will not be an empty array.
*/

//!!START
function product(nums){
    let sum = 1;
    for(let num of nums){
        sum *= num
    }
    return sum
}
//!!END


// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3]));        // 12

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = product;