console.pog = (val) => {
    console.log('\n--------------------------\n');
    console.log(val);
    console.log('\n--------------------------\n');
};
// function myFunc() {
//     let num = 5;

//     num += 5;

//     console.log(num);
// }

// myFunc();

// (function () {
//     let num = 5;

//     num += 5;

//     console.log(num);
// })();

// (funcito)()

// (function () {
//     console.log('I run immediately');
// })();

// let checkThisOut = ((name) => {
//     // console.log("Am I running?")
//     return `Hello, ${name}!`;
// })('Zaviar');

// console.log(checkThisOut);

// let str = 'Praise The Sun!';
// let num = 32;
// let bool = false;

// console.log(typeof str); // string (but secretly not)
// console.log(typeof num); // number (but secretly not)
// console.log(typeof bool); // boolean (but secretly not)

// console.log(str.slice(2));

// What we write
let str = 'Solaire';

// const myStr = new String()

// myStr.ind

// const objStr = {
//     hey: 'Listen!',
//     go: 'home',
// };

// console.log(objStr.hey);
// console.log(objStr['go']);

// Behind the scenes JS
// let strObj = {
//     0: 'S',
//     1: 'o',
//     2: 'l',
//     3: 'a',
//     4: 'i',
//     5: 'r',
//     6: 'e',
//     length: 7,
//     slice: (start, end) => {
//         // slice things
//     },
//     log: function () {
//         console.log(this);
//     },
// };

// strObj.log();

// console.log(str[0]);
// console.log(strObj[0]);

// console.log(str.length);
// console.log(str['length']);

// console.log(typeof [1, 2, 3]);

// // What we write
// let arr = ['a', 2, false];

// Behind the scenes JS
// let arr = {
//     0: 'a',
//     1: 2,
//     2: false,
//     length: 3,
// }.slice();

// let myNormalStr = 'hey';
// let myObjectStr = new String('hey');

// Number
// Object
// Array

// console.log(myNormalStr, myObjectStr);

// String.wtf = () => console.log("I can't believe this works");

// String.wtf();

// arr.forEach((el) => console.pog(el));

// Remember, ONLY objects have methods!
// const myFunc = (val1, val2) => {
//   return val1 + val2;
// };
// console.log(myFunc.call); // [Function: call]
// console.log(myFunc.call(null, 5, 10)); // 15
// console.log(myFunc(5, 10)); // 15
// console.log(myFunc.toString());
// (val1, val2) => {
//     return val1 + val2;
// }

// console.pog(str['slice'].toString());
// console.pog(str['slice']['toString']());
// console.pog(str['slice'](3));
// 'function slice() { [native code] }'

// class MyString {
//     // functions go here
// }

// console.log('hey?');

// String.whatever = 'hey';

// console.pog('my string'.whatever);

// if ('') {
//     console.log('True!');
// } else {
//     console.log('False!');
// }

// if (false) {
//     console.log('I never get to run :(');
// }

// if (null) {
//     console.log('I never get to run :(');
// }

// if (undefined) {
//     console.log('I never get to run :(');
// }

// if (0) {
//     console.log('I never get to run :(');
// }

// if (-0) {
//     console.log('I never get to run :(');
// }

// if (0n) {
//     console.log('I never get to run :(');
// }

// if (NaN) {
//     console.log('I never get to run :(');
// }

// if ('') {
//     console.log('I never get to run :(');
// }

// console.log(99007199254740992n);

// //var
// const withVar = () => {
//   console.log(animal);
//   var animal = "Cat";
// };

// withVar(); // undefined

// //const

// const withConst = () => {
//   console.log(animal);
//   const animal = "Dog";
// };

// withConst(); // Reference Error

// ! ---------------------------------------------------------------------------
// * ----- function declaration
// ! ---------------------------------------------------------------------------

// hello(); // hello

// function hello() {
//     console.log('hello!');
// }

// ! ---------------------------------------------------------------------------
// * -----  function expression
// ! ---------------------------------------------------------------------------

// hello(); // Reference Error

// let hello = function () {
//     console.log('hello!');
// };

// ! ---------------------------------------------------------------------------
// * -----  function expression with var
// ! ---------------------------------------------------------------------------

// console.log(typeof hello); // undefined
// // hello(); // Type Error

// var hello = function () {
//     // console.log(myVal);

//     // if (true) {
//     //     var myVal = 'bye!';
//     // }

//     console.log('hello!');

//     // console.log(myVal);
// };

// console.log(typeof hello);

// // hello(); // hello!

// ! ---------------------------------------------------------------------------
// * -----  function declaration with var
// ! ---------------------------------------------------------------------------

// var foo = "I'm a variable";

// function foo() {
//     return "I'm a function";
// }

// console.log(foo); // I am a variable

// ! ---------------------------------------------------------------------------
// * -----  function declaration with let/const
// ! ---------------------------------------------------------------------------

// let foo = "I'm a variable";

// foo = 25

// console.log(foo); // undefined

// // Syntax Error
console.log(foo);
// function foo() {
//     return "I'm a function";
// }

let foo = function () {
    return "I'm a function";
};

// console.log(foo);
