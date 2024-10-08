/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// Check the first value of our arr (val)

// If that value is an array, return [...flatten(arr[0])]
// If that value is NOT an array, return [val, ...flatten(arr.slice(1))]

// function flatten(arr) {
//     // Base case
//     if (arr.length === 0) return arr;

//     // Recursive Step + Case
//     if (Array.isArray(arr[0])) {
//         return [...flatten(arr[0]), ...flatten(arr.slice(1))];
//         // return [...flatten(arr[0])];
//     } else {
//         return [arr[0], ...flatten(arr.slice(1))];
//     }
// }

// ! ---------------------------------------------------------------------------
// * ----- Recurse + loop
// ! ---------------------------------------------------------------------------

// function flatten(arr) {
//     // Your code here
//     if (!Array.isArray(arr)) {
//         console.log(arr);
//         return [arr];
//     }
//     let result = [];
//     for (let i of arr) {
//         console.log(i);
//         result.push(...flatten(i));
//     }
//     return result;
// }

// ? ---------------------------------------------------------------------------
// * ----- One line
// ? ---------------------------------------------------------------------------

const flatten = (arr) =>
    arr.length === 0
        ? arr
        : Array.isArray(arr[0])
        ? [...flatten(arr[0]), ...flatten(arr.slice(1))]
        : [arr[0], ...flatten(arr.slice(1))];

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
