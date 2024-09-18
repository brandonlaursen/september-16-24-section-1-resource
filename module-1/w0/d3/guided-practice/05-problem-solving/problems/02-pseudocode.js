/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.

  Understand the problem
  - INPUT: a number -> 94
  - OUTPUT: a boolean -> false
  * 95 - 100 - 105
  * we need just to check if the number is between 95 and 105

  make a plan
  1. define a function within5Of100 takes in num
  2. store in var called boolean
    use comparison operator to
     check if num is greater than 95 - <=
     check if num is less than 105 >=
  3. return boolean

  execute the plan
  refactor
*/

function within5Of100(num) {
  // console.log(num);

  // let boolean1 = num >= 95;
  // console.log("boolean1:", boolean1);
  // let boolean2 = num <= 105
  // console.log("boolean2:", boolean2);

  // let result = boolean1 && boolean2;
  // console.log('==>',result);

  if (num >= 95 && num <= 105) {
    return true;
  } else {
    return false;
  }

  // return num >= 95 && num <= 105;
}

// console.log('return val',within5Of100(94));  //=> false
// console.log(within5Of100(95));  //=> true
// console.log(within5Of100(100)); //=> true
// console.log(within5Of100(105)); //=> true
// console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
