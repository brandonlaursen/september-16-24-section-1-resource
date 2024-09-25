/*
Write a function pairProduct that accepts an array of numbers and a product as
arguments. The function should return a boolean indicating whether or not a pair
of distinct elements in the array result in the product when multiplied
together.
You may assume that the input array contains unique elements.
*/

//!!START
function pairProduct(arr, product) {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      num2 = arr[j];
      if (num1 * num2 === product) return true;
    }
  }
  return false;
}
//!!END

// console.log(pairProduct([4, 2, 5, 8], 16));    // true
// console.log(pairProduct([8, 1, 9, 3], 8));     // true
// console.log(pairProduct([3, 4], 12));          // true
// console.log(pairProduct([3, 4, 6, 2, 5], 12)); // true
// console.log(pairProduct([4, 2, 5, 7], 16));    // false
// console.log(pairProduct([8, 4, 9, 3], 8));     // false
// console.log(pairProduct([3], 12));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairProduct;
