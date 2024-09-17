/*
Let's practice playing with strings in JavaScript!

  What are strings?
  * Strings are delineated with "", or '' or `` which we learn next week
  * Collection of characters in memory

  Wrapper objects
  * When we treat a primitive value like it was an object (i.e. by accessing properties and methods), JavaScript creates, under the hood, a wrapper to wrap this value and expose it as an object. The JS engine never reuses a wrapper object, giving them to the garbage collector right after a single use.

  * https://programmingwithmosh.com/javascript/javascript-wrapper-objects/



*/

let string = 'this is a string';
let string2 = "cats";
let string3 = `dog`;

// d o g undefined
// 0 1 2   3
console.log(string3);// dog

console.log(`dog`[0]);// d
console.log(string3[0]);// d
console.log(string3[1]);// o
console.log(string3[2]);// g
console.log('==>',string3[3]);

// length property
console.log(string3.length);// 3

// `dog`[2]
console.log(string3[string3.length - 1]);// g

// string3[2] = g
console.log(string3[1 + 1]);// ???


let string4 = `Hello`;
let name = 'brandon';

let sentence = string4 + ' ' + name;
console.log('==>',sentence);

let sentence1 = `Hello ${name} has ${string2}`
// console.log(sentence1);

let characters = 'abc';
// console.log(characters.length)

console.log(characters.indexOf('a'));

let result = characters.indexOf('a');
console.log(result);


// 1. Set the value of expression1 to the concatenated string
//	  of str1A and str1B with a single space in between the
//    strings.
let str1A = 'Hello'
let str1B = 'World!'
let expression1;

console.log(expression1); //=> 'Hello World!'

// 2. Set the value of expression2 to the first character of str2.
let str2 = 'Hello';
let expression2;

console.log(expression2); //=> 'H'

// 3. Set the value of expression3 to the index of 'o' in str3.
let str3 = 'Hello';
let expression3;

console.log(expression3); //=> 4

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.
let expression4 = "Academy"[3];

let predictExpression4;

// 5. Predict what the value of expression5 will be when printed
//    to the console. Set predictExpression5 to the value that
//    you think expression4 will evaluate to.
let str5 = "BLUE";
let expression5 = str5.length - str5.indexOf("U");

let predictExpression5;

// 6. Predict what the value of expression6 will be when printed
//    to the console. Set predictExpression6 to the value that
//    you think expression6 will evaluate to.
let str6A = 'start';
let str6B = 'end';
let expression6 = str6A.length - str6B[-1];

let predictExpression6;


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  expression1,
  expression2,
  expression3,
  expression4,
  expression5,
  expression6,
  predictExpression4,
  predictExpression5,
  predictExpression6,
};
