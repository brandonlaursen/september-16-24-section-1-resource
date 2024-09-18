/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Write a `funnyStringConcat` function that receives two string parameters:
`str1` and `str2`. The function should return a new string consisting of the
first 3 letters of `str1` followed by the last 3 letters of `str2`.

(You can assume that the strings passed to `funnyStringConcat` will always have
at least 3 letters.)

**Challenge:** Once you get `funnyStringConcat` working, refactor it so that it
uses the String `substring` method--look it up on MDN!--and consists of only one
line inside the function block.
*/

/*
- declare a function funnyStringConcat and pass it two string parameters
- grab the first three letters of string1
- grab the last three letter of string 2
- concat first three of string 1 to last three of string 2
*/

// - declare a function funnyStringConcat and pass it two string parameters
function funnyStringConcat(string1, string2) {
  // - grab the first three letters of string1
  // console.log(string1[0], string1[1], string1[2]);

  let firstThree = string1[0] + string1[1] + string1[2];
  // let firstThree = string1.substring(0, 3);
  // let firstThree = string1.slice(0, 3);

  // let lastThree = string2.substring(string2.length - 3);
  let lastThree = string2.slice(-3);

  // console.log(string2);
  // - grab the last three letter of string 2
  // - concat first three of string 1 to last three of string 2
  let result = firstThree + lastThree;

  // return result;
  return string1.slice(0, 3) + string2.slice(-3);
}

// console.log(funnyStringConcat("abc", "def")); //=> "abcdef"
// console.log(funnyStringConcat("number", "soldier"));  //=> "numier"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = funnyStringConcat;
