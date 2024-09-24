/*
The following function is named `eCounter(word)`. The function takes in a string
word and returns the number of e's in the word. The function counts both
lowercase (e) and uppercase (E). Your job is to translate the following function
to use a `while` loop instead of a `for` loop!
*/

function eCounter(word) {
  let count = 0;

  //!!ADD
  // for (let index = 0; index < word.length; index++) {
  //!!END_ADD
  //!!START SILENT
  let index = 0;
  while (index < word.length) {
  //!!END
    let char = word[index];
    if (char === "e" || char === "E") {
      count += 1;
    }
    //!!START SILENT
    index++;
    //!!END
  }

  return count;
};

// console.log(eCounter("apple"));      // => 1
// console.log(eCounter("appleapple")); // => 2
// console.log(eCounter("Appleee"));    // => 3


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = eCounter;

