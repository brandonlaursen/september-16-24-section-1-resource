/***********************************************************************
Write a recursive function `recursivePreserveType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept one string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified type. Note that the returned function only filters elements of one type,
as opposed to the last problem which accepted any number of strings.

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]

Note: the mocha tests do not test that your solution is implemented recursively.
However, for bonus points try to solve it both with recursion and iteration.
*/

// function recursivePreserveType(array) {
//     const inner = (type, index = 0) => {
//         if (array.length === index) return [];

//         const el = array[index];

//         if (typeof el === type) {
//             return [el, ...inner(type, ++index)];
//         } else {
//             return [...inner(type, ++index)];
//         }
//     };

//     return inner;
// }

// //! Using the closure creator within the inner function
// function recursivePreserveType(arr) {
//     return function preserve(type) {
//         if (arr.length === 0) return [];
//         if (typeof arr[0] === type)
//             return [arr[0], ...recursivePreserveType(arr.slice(1))(type)];
//         else return [...recursivePreserveType(arr.slice(1))(type)];
//     };
// }



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = recursivePreserveType;
} catch (e) {
    module.exports = null;
}
