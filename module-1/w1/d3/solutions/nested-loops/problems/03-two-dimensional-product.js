/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
*/

//!!START
function twoDimensionalProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      let num = subArr[j];
      product *= num;
    }
  }
  return product;
}
//!!END

// let arr1 = [[6, 4], [5], [3, 1]];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [[11, 4], [2]];
// console.log(twoDimensionalProduct(arr2)); // 88

// let arr3 = [
//   [-9, 8, 4],
//   [8, 2],
// ];
// console.log(twoDimensionalProduct(arr3)); // -4608

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalProduct;
