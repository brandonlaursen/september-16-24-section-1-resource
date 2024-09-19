/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.

 understand the problem
 input: a string    -> academy
 output: new string -> mdc

 0 1 2 3 4 5 6
 a c a d e m y
   ^   ^   ^
  <----------
  * getting the letters at odd indexes in a reverse order

 make a plan
    1. Define a function elementsOfOddIndicesReversed that takes in a string
    2. define a new str
    3. create a loop
      a. start at the end of the string - word.length - 1 = 7 - 1 = 6
      b. stop when i is 0 -> 6 -> 0     i >= 0
      c. step: 6 -> 0 i--
        a. how can we check if an indices is odd - conditional
           1. check if i has a remainder when divided by two - using modulo
           2. if it is, concat to new string
    4. return new string

  execute the plan
  refactor
*/

function oddNumOnly(num) {
  // console.log(-17 % 2);// -1
  // num % 2 !== 0
  if (num % 2 === 1 || num % 2 === -1) {
      return num;
  }
  return null;
}
console.log(oddNumOnly(-17));// -17

function elementsOfOddIndicesReversed(str) {

    console.log(-24 % 2 === 0);
    // console.log(str);// academy
    let newStr = '';// ''

    for(let i = str.length - 1; i >= 0; i--) {
      // console.log(i);
      let letter = str[i];// 6 5 4 3 2 1 0
      console.log('index:', i, 'letter:', letter);// y m e d a c a
      if(i % 2 !== 0) {
        console.log(i + ` a is and odd index`)
        newStr += letter
      }
      console.log(newStr);
    }

    return newStr;
}

// console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
// console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
// console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
