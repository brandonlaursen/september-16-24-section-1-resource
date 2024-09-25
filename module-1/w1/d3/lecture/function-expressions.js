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
// arrow functions

let callback = function () {
  return "callback";
};

let callback1 = () => {
  let string = 'callback'
  return string;
}

// implicit
let callback2 = () => "callback";

function higherOrder(callback) {
  // let callback = () => "callback"
  // callback();
}

// higherOrder(callback);
let num = 2;
higherOrder(num);
higherOrder(2);

higherOrder(function () {
  return "callback";
});

higherOrder(() => {
  return "callback";
});

higherOrder(() => "callback");

'string';
12;
[1,2,3]
// function(){}


// call the function
let name = function(){

};

// name();

(function(){
  console.log('iffe')
})();
