/*
Time to practice variables! Follow the comments for instructions. Be sure to
test your work by running your code and the test specs!
*/

// 1. Declare a variable called `firstName` and assign it your first name
//    as a string:

// let firstName = 'brandon';
// console.log(firstName);
// console.log('brandon');
let firstName;// variable declaration

firstName = 'brandon';// variable assignments


// 2. Declare a variable called `lastName` and assign it your last name
//    as a string:

let lastName = 'laursen';// variable initialization

// 3. Declare a variable called `age`:

let age;
let boolean = true;
let myFunc = function(){};

// {
//   let age = 10;
// }

// age = '5';

// var number = 6;
// var number = 7;

// 4. Print out the `firstName`, `lastName`, and `age` variables. What
//    do you expect them to be when they get printed?

console.log(firstName);
console.log(lastName);
console.log(age);


// 5. Assign the `age` variable to a number:
age = 5;
console.log("age:", age);


// 6. Print out the `firstName`, `lastName`, and `age` variables. What
//    do you expect them to be when they get printed?

console.log('===>',firstName, lastName, age);// ===> brandon laursen 5

// console.log(first)

// 'brandon laursen is 5';
// * we are storing in a variable an expression
// ! NOT
// ? huh?

let fullName = firstName + ' ' + lastName + ' is ' + age;

let expression = 1 + 2 + 3 + 4 + 5;
// console.log('expression: ',expression);// 15

// console.log(fullName);// brandon laursen is 5

let gravity = 9.8;


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const obj = {};
try { obj.firstName = firstName; } catch {}
try { obj.lastName = lastName; } catch {}
try { obj.age = age; } catch {}
module.exports = obj;
