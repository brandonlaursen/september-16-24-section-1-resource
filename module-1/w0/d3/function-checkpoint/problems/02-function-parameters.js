/*
Function Parameters and Arguments: Use what you have learned about functions and
function parameters and arguments to complete the steps below.

Implement solutions to the following problems so that all test specs pass when
you run the following command in your terminal:
npm test test/02-function-parameters-spec.js
*/

// 1. Define a function called productOfTwoNumbers that explicitly takes in two
//    parameters. Both parameters should be numbers. Return the product of the
//    two parameters.

function productOfTwoNumbers(num1, num2){

  return num1 * num2;
}

// console.log(productOfTwoNumbers(10, 2))


// 2. Set the product variable below to the product of the numbers 2 and 3 by
//    using the productOfTwoNumbers function.
let product = productOfTwoNumbers(2, 3); //=> 6
// console.log("product:", product);// product: 6


// 3. Define a function called recipeIngredients that explicitly takes in 3
//    string parameters. The function should return the string "Recipe List:
//    ing1, ing2, and ing3." where ing1 is the value of the first parameter,
//    ing2 is the second, and ing3 is the last parameter.

function recipeIngredients(string1, string2, string3){
  // console.log(string1, string2, string3);// milk eggs flour

  return `Recipe List: ${string1}, ${string2}, and ${string3}.`;

}
// console.log(recipeIngredients('milk','eggs','flour'));// Recipe List: milk, eggs, and flour.

//    Write your own tests for recipeIngredients that print the function's
//    return value to the terminal. Here's a test to get you started:
  //  console.log(recipeIngredients('Carrots', 'Onions', 'Chicken'));

//    Run the following command in the terminal to run this file and see the
//    messages printed to the terminal:
//    node problems/02-function-parameters.js


// 4. Define a function isInRange(lowNum, highNum, testNum) that returns true if
//    testNum falls inside the inclusive range of lowNum to highNum and false if
//    it does not.

function isInRange(lowNum, highNum, testNum){

  // console.log(lowNum, highNum, testNum)

  return testNum >= lowNum && testNum <= highNum;
};

// console.log(isInRange(0, 10, 5));// true
// console.log(isInRange(0, 10, 15));// false
// console.log(isInRange(0, 10, 10));// true

//    Write your own tests for isInRange that print the function's return value
//    to the terminal.

//    Run the following command in the terminal to run this file and see the
//    messages printed to the terminal:
//    node problems/02-function-parameters.js


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {
  product,
};
try {
  exportObj.productOfTwoNumbers = productOfTwoNumbers;
} catch {}
try {
  exportObj.recipeIngredients = recipeIngredients;
} catch {}
try {
  exportObj.isInRange = isInRange;
} catch {}

module.exports = exportObj;
