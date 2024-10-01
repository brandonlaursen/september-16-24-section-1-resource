let string = "string";
let num = 2;
let myFunc = function () {};

// param1 => myFunc2
function higherOrder(param1) {
  console.log(param1); //
}

// let bool = true;
// higherOrder(bool)
// higherOrder(true)
// higherOrder('string')
// higherOrder(12)

function myFunc2() {}
// higherOrder(myFunc2);// [Function: myFunc2]

let myFunc3 = () => {};
// higherOrder(myFunc3);// [Function: myFunc3]

let myFunc4 = () => null;
// higherOrder(myFunc4);// [Function: myFunc4]

// higherOrder(function myFunc2(){

// });

// higherOrder(myFunc3 = () => {});

// higherOrder(() => {});

// callback function
let double = (num) => num * 2;

// console.log(double(10));// 20

// higher order function
// numbers = [1,2,3]
// callback = num => num * 2;
function doubleNumbers(numbers, callback) {
  console.log(numbers, callback); // [ 1, 2, 3 ] [Function: double]

  if(callback === undefined){
    
  }

  // console.log(callback(5));// 10
  let result = []

  for(let num of numbers) {
    // console.log('before:',num);
    let doubled = callback(num);
    // console.log('after:',doubled);
    result.push(doubled);
  }

  return result
}

doubleNumbers([1,2,3], double)
doubleNumbers([1,2,3])

// let array = [1,2,3];
// // [ 1 2 3 ]
// let res1 = array.map( (num) => num * 2 ) ;
// let res2 = array.map( double ) ;
// console.log(res1, res2);
// (1) => 2
// (2) => 4
// (3) => 6
// return [2, 4, 6]

// doubleNumbers([1,2,3], double)

console.log(doubleNumbers([1, 2, 3], (num) => num * 2));
