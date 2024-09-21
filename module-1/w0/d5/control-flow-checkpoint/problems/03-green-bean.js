/*
Conditionals: Use what you have learned about conditionals to complete the
problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/03-green-bean-spec.js
*/

// Define a function called greenBean that takes in a string parameter. If the
// lowercased string starts with the characters 'green' and ends in the
// characters 'bean', then return 1 (the number, NOT a string). If it
// starts with 'green' but doesn't end in 'bean', or if it ends in 'bean', but
// doesn't start with 'green', then return 0.5. Otherwise, return 0.

function greenBean(string) {

  let total = 0;

  if(string.toLowerCase().startsWith('green')) {
    total += .5;
  }
  if(string.toLowerCase().endsWith('bean')){
    total += .5;
  }

  return total;

}

console.log(greenBean('greenPODbean'));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = greenBean;
