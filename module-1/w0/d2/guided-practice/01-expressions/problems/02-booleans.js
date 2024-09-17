/*
Let's practice playing with boolean expressions and operators in JavaScript!


   Booleans
    * Booleans can be used to represent true and false
    * We can perform actions based on true/false

  Logical operators
    ! - not (bang)
    && - and - multiplication - +
    || - or  - addition - *

  Order of operators
    * not, and, or

    * Logical operators return a boolean

*/
// true = 1
// false = 0
//       true && false
//          1 * 0 = 0
// console.log(1 && 0);

//        true || false
//          1 + 0 = 1
// console.log(1 || 0);

// console.log(false);
// console.log(true);
// console.log(!true);
// console.log(!false);
// console.log(!true || false);
// console.log(!true || !false);
// let result = !true || !false;
// console.log('result: ',result);

// let demorgans = !(true && false);
// let demorgans1 = !(
//   function () {
//     return true;
//   } &&
//   function () {
//     return false;
//   }
// );
// (!true || !false);





// 1. Set the value of expression1 to be true or false

let expression1 = true || false;

console.log(expression1); //=> true

// 2. Set the value of expression2 to be false and false

let expression2 = false && false;

console.log(expression2); //=> false

// 3. Set the value of expression3 to be false or true and true

let expression3 = false || true && true;

console.log(expression3); //=> true

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.
let expression4 = true || (true && false);

let predictExpression4 = true;

// 5. Predict what the value of expression5 will be when printed
//    to the console. Set predictExpression5 to the value that
//    you think expression5 will evaluate to.
let expression5 = (true || false) && false;

let predictExpression5 = false;

// 6. Predict what the value of expression6 will be when printed
//    to the console. Set predictExpression6 to the value that
//    you think expression6 will evaluate to.
let expression6 = !(true && false) || !(true || false);

// (!true || !false) || (!true && !false)
// (true) ||  (false)

let predictExpression6 = true;

// 7. Predict what the value of expression7 will be when printed
//    to the console. Set predictExpression7 to the value that
//    you think expression7 will evaluate to.
let a = true;
let b = false;
// false || true || (false && !true && (!false || !true));
// true

let expression7 = b || a || (b && !a && (!b || !a));

let predictExpression7 = true;

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
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
