/*

  Destructuring
  * Allows us to move and and access values within an array or object
  * We can use destructuring behavior to extract elements of an array or object

*/

let array = [1, true, "hello"];

// let number = array[0];
// let bool = array[1];
// let string = array[2];

// let [ number, bool, string  ] = [1, true, "hello"];
// console.log(number, bool, string);


// function myFunc() {
//   let [number, , string] = array;
//   console.log(number, string);
// }


let lastName = 'brandon';
let firstName = 'laursen';

// let temp = lastName;// 'laursen';
// lastName = firstName;// 'brandon';
// firstName = temp;

// console.log(firstName, lastName);// brandon laursen


// [lastName, firstName ] = [firstName, lastName];
// console.log(firstName, lastName);// brandon laursen


let numbers = [1,3,2];

[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers);// [ 1, 2, 3 ]
