/*
The following function is named `aCounter(word)`. The function takes in a word
and returns the number of a's within that word. The function counts both
lowercase (a) and uppercase (A). Your job is to translate the following function
to use a `for` loop instead of the `while` loop it is currently using.
*/

function aCounter(word) {
  //!!ADD
  // let index = 0;
  //!!END_ADD
  let count = 0;
  //!!ADD
  // while (index < word.length) {
  //!!END_ADD
  //!!START SILENT
  for (let index = 0; index < word.length; index++) {
  //!!END
    let char = word[index];
    if (char === "a" || char === "A") {
      count += 1;
    }
    //!!ADD
    // index++;
    //!!END_ADD
  }
  return count;
};

// console.log(aCounter("apple"));      // => 1
// console.log(aCounter("appleapple")); // => 2
// console.log(aCounter("aAapple"));    // => 3


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = aCounter;

