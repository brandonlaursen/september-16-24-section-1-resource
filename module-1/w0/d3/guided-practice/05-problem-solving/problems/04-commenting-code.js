/*
Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.
*/


// define a function called charactersNotQuiteAtTheEdge that takes in a single parameter str
function charactersNotQuiteAtTheEdge(str) {


  // get second character of str
  let char1 = str[1];
  // console.log(char1);// r

  // get the last character of string
  let char2 = str[str.length - 2];

  // length = 6
  // 6 - 1 = 5
  // 6 - 2 = 4
  // 0 1 2 3 4 5
  // f r i n g e
  // console.log(char2);

  return char1 + char2;
}


console.log(charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
