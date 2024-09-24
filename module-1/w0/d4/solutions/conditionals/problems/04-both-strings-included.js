/*
Define a function named bothStringsIncluded that accepts a sentence string,
and two strings as parameters (for a total of 3 parameters). The function
should return true if both strings are found in the sentence, otherwise
it should return false.
*/

//!!START
function bothStringsIncluded(sentence, str1, str2) {
  if (sentence.includes(str1) && sentence.includes(str2)) {
    return true;
  }

  return false;
}
//!!END

// console.log(bothStringsIncluded("how now brown cow?", "panther", "cow"));  //=> false
// console.log(bothStringsIncluded("Dance party!", "Dance", "party"));        //=> true
// console.log(bothStringsIncluded("Question?", "tion", "?"));                //=> true
// console.log(bothStringsIncluded("I love programming", "apple", "potato")); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = bothStringsIncluded;
