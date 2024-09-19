




/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/

/*

  Understand the problem
    input: two nums, lowNum = -1  highNum = 2
    output: console.log() -1 1 0 1 2
    * how do we print every num between the low and high

  make a plan
    1. Define a function logBetween two nums low and high
    2. create a loop
      a. start - lowNum
      b. stop/condition - -1 <= 2  -> i <= 2
      c. step - increment by 1
      d. console.log(i)

  execute the plan
  refactor

  for (let step = 0; step < 5; step++) {
  console.log("Walking east one step");
  }

*/

function logBetween(low, hi) {
  // let i = 0;
  // let num = 1;
  // let index = num;

  // console.log(low, hi);
  // i = low = -1
  // let num = 5;
  // 3 <= 2
  for(let i = low; i <= hi; i++){
    console.log(i);
  }
}



logBetween(-1, 2);// -1 2
// logBetween(5, 20);
/* prints out:
-1
0
1
2
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;
