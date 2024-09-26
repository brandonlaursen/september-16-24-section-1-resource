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
function timesTwo(num) {
  console.log("4: entering times two");
  return num * 2;
}

// console.log(timesTwo(10));//20
// let returnValTimes = timesTwo(10);
// console.log(returnValTimes);// 20

function math(numbers) {
  console.log("2: entering into math");
  // let numTimesTwo = timesTwo(12);
  // console.log(numTimesTwo);// 24

  console.log("3: before we call timesTwo");
  let numTimesTwo = timesTwo(12);
  console.log("5: after calling times two");


  return numTimesTwo;
  // for(let i = 0; i < numbers.length; i++){
  //   let number = numbers[i];
  //   console.log('3: before we call timesTwo')
  //   let numTimesTwo = timesTwo(number);
  //   console.log('5: after calling times two')
  // }
}

console.log("1: before math call");
console.log("6: return value of math", math([1, 2, 3, 4, 5]));
console.log('7: after the math call');

// console.log('===>',console.log('hello'));//
console['log']('hello');
