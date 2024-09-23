/*
Write a function tripler(nums) that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.
*/

// mutate input array
function doubler(nums) {
  for (let i = 0; i < nums.length; i++) {
    let doubled = nums[i] * 2
    nums[i] = doubled;
  }

  return nums; // [2, 4, 6, 8]
}


// create a new array
function tripler(nums) {

  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    // nums[i] = nums[i] * 3;
    let tripled = nums[i] * 3
    newArr.push(tripled);
  }

  return newArr ; //

}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripler;
