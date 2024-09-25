/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
*/

// Your code here

// let arr1 = [[6, 4], [5], [3, 1]];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [[11, 4], [2]];
// console.log(twoDimensionalProduct(arr2)); // 88

// let arr3 = [
//   [-9, 8, 4],
//   [8, 2],
// ];
// console.log(twoDimensionalProduct(arr3)); // -4608

/*

    [      0  1
      0 - [6, 4],
      1 - [5],
      2 - [3, 1]
                   ];
*/


function twoDimensionalProduct(array) {

    let product = 1;

    for(let i = 0; i < array.length; i++){
      let subArr = array[i];
      // console.log('i:', i, subArr);

      for(let j = 0; j < subArr.length; j++) {
        let number = subArr[j];
        // console.log('j:',j, number)
        product *= number;
      }

    };

    return product;
}

// let arr1 = [[6, 4], [5], [3, 1]];
// // console.log(twoDimensionalProduct(arr1)); // 360

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalProduct;
