/*
Let's practice playing with comparison operators in JavaScript!

 Comparison Operators
  * used to compare values, to perform an action

  What are the comparison operators?
    * <, <=, ==, ===, >=, >

  What do they return?
     * A boolean

    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too

*/

// console.log(2 < 3);
// console.log(2 === 2);

// == - loose equality
// - checking the value
// console.log(2 == '2');// true
// console.log(2 == 2);// true
// console.log('2' == '2');// true

// // console.log(typeof '2');// string
// // console.log(typeof 2);// number
// // console.log(62262 == '62262');

// console.log(62262 === Number('62262'));
// console.log(62262 === +('62262'));

// console.log('===========');
// // === - strict equality
// // - checking the value
// // - check the data type
// // number !== string
// // 2 === 2
// console.log(2 === '2');// false
// console.log(2 === 2);// true
// console.log('2' === '2');// true


// // Opens up ascii table - man ascii
// console.log(1 + true);// 2
// console.log('1' + 1);// 11

// console.log('==>','a' < 'A');

// let num1 = 9;
// let statements1 = (8 <= num1 <= 10);
// console.log('==>',statements1);//


// console.log('==>',(true && 9))
// let statements2 = (num1 >= 8 && num1 <= 10);
// console.log(statements2);// tru

// let res = (8 <= num1 <= 10) === (num1  >= 8 && num1 <= 10);


// 1. Set the value of expression1 to be true only if num1A is less
//    than num1B.
let num1A = 10;
let num1B = 15;
// 10 < 15
let expression1 = num1A < num1B;

// console.log('==>',expression1); //=> true

num1A = 20;
// 20 < 15
expression1 = num1A < num1B;

// console.log(expression1); //=> false

// 2. Set the value of expression2 to be true only if num2A is
//    strictly equal to num2B.
let num2A = 10;
let num2B = 10;
let expression2 = num2A === num2B;

console.log('==>',expression2); //=> true

num2B = '20';
expression2 = num2A === num2B;

// console.log(expression2); //=> false

// 3. Predict what the value of expression3 will be when printed
//    to the console. Set predictExpression3 to the value that
//    you think expression3 will evaluate to.
let num3A = 0;
let num3B = 8;
let num3C = 10;

let expression3 = !num3A && num3B > num3C;

// !0 && 8 > 10;
// !falsy && false
// true && 8 > 10
// true && false
// console.log(!num3A && num3B);
let predictExpression3 = false;

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.
let num4A = 2;
let num4B = 5;

// 5 >= 2 || 2 !== 5;
// true || true
let expression4 = num4B >= num4A || num4A !== 5;

let predictExpression4 = true;


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  expression1,
  expression2,
  expression3,
  expression4,
  predictExpression3,
  predictExpression4,
};
