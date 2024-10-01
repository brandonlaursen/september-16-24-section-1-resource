/*

   1 2 3 4 5 6 7 9 10
  abcdefghijki

  10 + 15 = 25

*/

let a = 10;

a = 15;

// arr => <reference1>
let arr  = [2, true, false];

// arr1 => <reference1>
let arr1 = arr;

arr.push(3);

console.log(arr1, arr);

// arr2 => <reference2>
let arr2 = [...arr];

arr2.push('string');

console.log(arr, arr2)


// <ref3> === <ref4>
// console.log([1,2,3] === [1,2,3]);// false

// let matrix = [[],[[[[[[[[[[[[]]]]]]]]]]]]]
