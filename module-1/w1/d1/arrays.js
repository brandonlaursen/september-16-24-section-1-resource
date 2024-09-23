/*

  Homework Review

  Arrays
    * Arrays are useful when you need to hold more than just value;
    * Arrays are ordered collections of values.
    * Similar to strings; arrays have indices
    * We can access the value by using the index
    * We can use loops to iterate through arrays

*/

// 0   1       2         3
// 1 true  'string'   undefined
let arrays = [1, true, 'string'];
// console.log(arrays[0]);
// console.log(arrays[1]);
// console.log(arrays[2]);

// i = 0; i < 3; i++;
// i = 1
// i = 2
// i is not less than 3 so we stop
for(let i = 0; i < arrays.length; i++){
  let ele = arrays[i];
  // console.log('i: ', i, 'element: ', ele)
};


function myFunc(){

  // return 2,4,6;
  return [2,4,6];
}


// console.log(myFunc());

let arrays1 = [[1,2,3], [4,5,6]];

// console.log(arrays1[0]);// [ 1, 2, 3 ]

let nestedArray1 = arrays1[0];

// console.log(nestedArray1);//  [ 1, 2, 3 ]

// console.log(nestedArray1[0]);// 1
// console.log( [1, 2, 3 ][0]);// 1


// method - arrays
// .slice
// .split
// .join
// .includes


let array = [];
