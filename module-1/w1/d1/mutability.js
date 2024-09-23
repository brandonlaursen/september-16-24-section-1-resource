

/*

  Mutability
  * Mutability is the concept of certain pieces of data being able to changed or mutated. Of the datatypes that we've seen so far, only arrays are mutable.

  Mutable - can be changed
    * arrays
    * objects - learn next week

  Immutable - cannot be changed
    * strings
    * numbers
    * booleans
    * all the data types that are not objects/arrays/function
*/


let name = 'brandon';
// console.log(name);// brandon
name[0] = 'k';
// console.log(name);// brandon

// all we can do is reassign the variable to a different

name = 'krandon';
// console.log(name);// krandon

let num = 2;
num = num + 1;


let sequence1 = ['T', 'A', 'C', 'G'];
// console.log(sequence1);// [ 'T', 'A', 'C', 'G' ]
sequence1[0] = 'C';
// console.log(sequence1);// [ 'C', 'A', 'C', 'G' ]





//  .push
// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

let arr = ['hip', 'hip'];
console.log(arr);


let newLength = arr.push('array!');

// we store the return value of push in a variable
// we dont have to do this
console.log(newLength);

// this is the mutated array
console.log(arr);// [ 'hip', 'hip', 'array!' ]


arr.push(true);

console.log(arr);// [ 'hip', 'hip', 'array!', true ]

console.log(arr.push(false));

// let res = arr.push(false)

// console.log(arr);// [ 'hip', 'hip', 'array!', true, false ]


// 0 1 2      3
// 1 2 3      4
// .length = 3


// .push - O(1)


// arr.includes(3);
//  O(n)

// .unshift()
// O(n)
// arr = [1,2,3];
// arr = [0,1, 2, 3]
// arr.unshift(0)


// let arr2 = [1,2,3,4];

// let arr3 = arr2;

// arr3.push(5);
// // console.log(arr3);// [ 1, 2, 3, 4, 5 ]

// // console.log(arr2);// [ 1, 2, 3, 4, 5 ]

// let arr4 = arr2.slice();//

// arr4.push(6);

// console.log(arr2, arr4);// [ 1, 2, 3, 4, 5, 6 ]


let string = 'brandon';



let part1 = string.split('')
console.log(part1);

let part2 = part1.reverse();
console.log(part2);

let part3 = part2.join('');
console.log(part3);

let result = string.split('').reverse().join('');

// .reverse();
// console.log(result)


// const spiralOrder = (matrix, dir = 'r', res = []) => matrix.length ? dir === 'r' ? spiralOrder(matrix, 'd', res.concat(matrix.shift())) : dir === 'd' ? spiralOrder(matrix, 'l', res.concat(matrix.map(subArr => subArr.pop()))) : dir === 'l' ? spiralOrder(matrix, 'u', res.concat(matrix.pop().reverse())) : dir === 'u' ? spiralOrder(matrix, 'r', res.concat(matrix.map(subArr => subArr.shift()).reverse().filter(ele => ele))) : "TrulyObnoxious" : res
