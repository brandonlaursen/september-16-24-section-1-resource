/*
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.

HINT: This function only needs to print using console.log it does not need to
return anything.
*/



/*
  start - min
  stop - max
  step - interval
*/
function logBetweenStepper(min, max, interval) {

  // console.log(min, max, interval);// 5 9 1

  // i -> min -> 5
  // i <= max -> 9
  // i += interval -> 1
  for(let i = min; i <= max; i += interval) {
    console.log(i);
  };


}


// logBetweenStepper(5, 9, 1);
// logBetweenStepper(15, 90, 10);
/* prints out:
5
6
7
8
9
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetweenStepper;
