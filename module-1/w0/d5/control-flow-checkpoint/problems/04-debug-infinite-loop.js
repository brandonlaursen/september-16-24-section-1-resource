/*
Loops and Conditionals: Use what you have learned about loops and conditionals
to complete the problem below.
*/

// Run the test spec for this file:
// npm test test/04-debug-infinite-loop-spec.js

// Notice how the test specs hang. Your terminal will look frozen when running
// the test spec for this file. To unfreeze your terminal, simply press "CTRL+C"
// while in the frozen terminal.

// Fix this behavior so it doesn't happen again by getting rid of the infinite
// loop in the code below:

// addThreeUntilGreaterThan100(num) should add 3 to the num until the num is
// over 100. Then it should return the num.
function addThreeUntilGreaterThan100(num) {
// IMPORTANT TIP: Whenever you are working with loops, there is a chance that
// you will encounter an infinite loop. Remember the behavior that this infinite
// while loop produced in the terminal. If you see this behavior again in
// another problem, the culprit is most likely an infinite loop.
  while (num < 100) {
    num += 3;
    // console.log(num);
  }
  return num;
}


console.log(addThreeUntilGreaterThan100(10));
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = addThreeUntilGreaterThan100;
