/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.

  understanding the problem
  input: academy
  output: acad
  *
  0 1 2 3  | 4 5 6
  a c a d  | e m y
  7 / 2 =  3.5

  0 1 2  | 3 4 5
  p l a  | n e t
  6 / 2 = 3


  0 1 2  | 3 4 5
  s p o    r t
  5 / 2 = 2.5
   * rounding down?

  make a plan
  1. firstHalf(str) take in str
  2. define new str
  3. store in variable and find the half way point, divide length by 2 and round down
  4. iterate
    a. start at 0
    b. iterate up to half way point
    c. go an increment of 1
    d. each time we iterate, concat to new string
  5. return newStr


*/

function firstHalf(str) {
  let newStr = '';

  // console.log(Math.floor(str.length / 2))// 7 / 2 3.5 = 3
  let halfway = Math.ceil(str.length / 2)// 3
  // let halfway = str.length / 2 // 3

  for(let i = 0; i < halfway; i++){
    // console.log(i);
    let letter = str[i];
    // console.log(letter);
    newStr += letter;
    // console.log(newStr);
  }


  return newStr;
}

console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet'));  // 'pla'
console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
