/*
Let's practice playing with number expressions and arithmetic operators in
JavaScript!


*/

// // PEMDAS
// console.log((1 + 3) / 2);// 2
// console.log(2 + (4 + 8));// 14
// console.log(4 * (2 + 8));// 40

// // modulo
// // 3 * 3 = 9 = 1
// // the remainder
// console.log(10 % 3);// 1
// console.log(3 % 10)// 3



console.log('ENTERING NUMBERS FILE');

let num1 = 2;
let num2 = 5;
let num3 = 7;
let num4 = 10;

// 1. Set the value of expression1 to num2 plus num1.

let expression1 = num1 + num2;

console.log('1. ==>',expression1); //=> 7

// 2. Set the value of expression2 to num4 divided by num2.

let expression2 = num4 / num2;

console.log('2. ==>',expression2); //=> 2

// 3. Set the value of expression3 to the remainder of num3
//    divided by num2.

let expression3 = num3 % num2;

console.log('3. ==>',expression3); //=> 2

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.

// 2 + 9 * (12 - 5);
// 2 + 63 = 65
let expression4 = num1 + 9 * (12 - num2);

let predictExpression4 = 65;
console.log('4. ==>', predictExpression4);

// 5. Predict what the value of expression5 will be when printed
//    to the console. Set predictExpression5 to the value that
//    you think expression4 will evaluate to.
let num5 = 14;

// assign 14 to expression 5 THEN we increment
// POSTFIX
let expression5 = num5++;

// increment num5 THEN assign the value
// PREFIX ++
// let expression5 = ++num5;


let predictExpression5 = 14;
console.log('5.', predictExpression5, expression5, num5);

// 6. Predict what the value of expression6 will be when printed
//    to the console. Set predictExpression6 to the value that
//    you think expression6 will evaluate to.
let num6 = 22;
num6--;// num = 21
let expression6 = num6;

let predictExpression6 = 21;
// console.log("predictExpression6:", predictExpression6);

// 7. Predict what the value of expression7 will be when printed
//    to the console. Set predictExpression7 to the value that
//    you think expression6 will evaluate to.

// (10 % 6) * 2 - 3
// 5
let expression7 = (num4 % 6) * num1 - 3;

let predictExpression7 = 5;
console.log("predictExpression7:", predictExpression7);



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  num1,
  num2,
  num3,
  num4,
  expression1,
  expression2,
  expression3,
  expression4,
  expression5,
  expression6,
  expression7,
  predictExpression4,
  predictExpression5,
  predictExpression6,
  predictExpression7,
};
