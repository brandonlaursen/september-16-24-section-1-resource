/*

  Function expression syntax!
    * another a way to write a function
    * storing an anonymous function in a variable therefore giving it a name to alias it by


  * 1. It can be stored in a variable
  * 2. it can be passed as an argument to a function (coming up next week!)
  * 3. It can be returned from a function (also coming up next week!)

*/

let string = "strings";
let number = 12;
let array = [];
let boolean = true;

// function declaration
function myFunc() {
  return "hello from my func";
}

// console.log(myFunc());

// anon
let myFunc2 = function () {
  return "hello from myFunc2";
};

// console.log(myFunc2); // [Function: myFunc2]
// console.log(myFunc2()); // hello from myFunc2


// ! learn next week
