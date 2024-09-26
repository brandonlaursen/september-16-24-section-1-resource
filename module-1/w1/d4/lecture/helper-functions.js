/*

  Helper Functions!

    What is a helper function?
      * function that performs part of the computation of another function
      * Can call a function from another function

    Why would helper functions be useful?
      * Decompose problems - which is the process of breaking down a larger problem into its smaller sub-problems.
      * Break down problems into chunks that are manageable
      * Use abstraction to manage complexity of program by hiding some implementation
      * Makes code more readable, more obvious what each part does, clean!


*/

// when a  function is called it is added to the stack
// when a function is returned it is removed from the stack
// whatever is at the top of the call stack is what js will focus on
// first in last out - last in first out
// function timesTwo(num) {
//   console.log("4: entering times two");
//   return num * 2;
// }

// // console.log(timesTwo(10));//20
// // let returnValTimes = timesTwo(10);
// // console.log(returnValTimes);// 20

// function math(numbers) {
//   console.log("2: entering into math");
//   // let numTimesTwo = timesTwo(12);
//   // console.log(numTimesTwo);// 24

//   console.log("3: before we call timesTwo");
//   let numTimesTwo = timesTwo(12);
//   console.log("5: after calling times two");


//   return numTimesTwo;
//   // for(let i = 0; i < numbers.length; i++){
//   //   let number = numbers[i];
//   //   console.log('3: before we call timesTwo')
//   //   let numTimesTwo = timesTwo(number);
//   //   console.log('5: after calling times two')
//   // }
// }

// console.log("1: before math call");
// console.log("6: return value of math", math([1, 2, 3, 4, 5]));
// console.log('7: after the math call');

// // console.log('===>',console.log('hello'));//
// console['log']('hello');





// function higherOrder(){
//   myFunc();
// }

// higherOrder()

// myFunc();

// function myFunc(){

//   console.log('hello from my func');
// }


// myFunc();


// console.log(string);//

// let string = 'brandon';

// myFunc();


// function higherOrder(){
//   myFunc();
// }


// higherOrder()

// let myFunc = function(){
//   console.log('hello from my func');
// }




//  console.log(number);// undefined

// hoisting - accessing a variable before been defined

// console.log(string);// string error!
// let string = 'string';
// const string1 = 'string'

// var string2 = undefined
console.log(string2);
var string2 = 'string';


// var vs let
// var can be hoisted because it has a default value of undefined
// var can be reinitialized
// var can reassigned
// var is function scoped

// let
// let cannot be hoisted because it does not a have a default value
// let cannot be reinitialized
// let can reassigned
// let is block scoped

// const
// const cannot be hoisted because it does not a have a default value
// const cannot be reinitialized
// const cannot reassigned
// const is block scoped
