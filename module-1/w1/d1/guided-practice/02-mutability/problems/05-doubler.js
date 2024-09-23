/*
Define a function doubler that takes an array of numbers and returns the same
array but every element of the array is multiplied by 2.
*/

/*



*/

// let sequence = ['T', 'A', 'C', 'G'];
// let i = 0;
// sequence[i] = "C";
// console.log(sequence);

//  nums = [1, 2, 3, 4];
function doubler(nums) {
  console.log(nums);
  // loop
  for (let i = 0; i < nums.length; i++) {
    // console.log(i);
    // let num = nums[i];
    // console.log(i, nums[i], num);

    // i = 3;
    // nums[3] = 4
    // 4 * 2
    // [2,4,6,8]
    nums[i] = nums[i] * 2;
    // console.log(nums)
  }

  return nums; // [2, 4, 6, 8]
}

let nums1 = [1, 2, 3, 4];
let doubled1 = doubler(nums1);
console.log(doubled1);
// console.log(doubled1);          //=> [2, 4, 6, 8]
// console.log(nums1 === doubled1) //=> true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubler;
