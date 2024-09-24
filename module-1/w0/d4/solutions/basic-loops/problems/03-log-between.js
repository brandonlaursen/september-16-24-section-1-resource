/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/

//!!START
function logBetween(lowNum, highNum) {
  for (let num = lowNum; num <= highNum; num += 1) {
    console.log(num);
  }

  // alternatively using while:
  // let num = lowNum;
  // while (num <= highNum) {
  //  console.log(num);
  //  num++;
  // }
}
//!!END

// logBetween(-1, 2);
/* prints out:
-1
0
1
2
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;
