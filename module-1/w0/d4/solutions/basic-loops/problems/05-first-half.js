/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  //!!START
  let newStr = '';
  for (let i = 0; i < str.length / 2; i++) {
    newStr += str[i];
  }
  return newStr;
  //!!END
}

// console.log(firstHalf('academy')); // 'acad'
// console.log(firstHalf('planet'));  // 'pla'
// console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
