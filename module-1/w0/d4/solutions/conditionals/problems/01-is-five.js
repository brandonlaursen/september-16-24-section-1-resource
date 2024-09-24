/*
Define a function `isFive` that takes in a number parameter. It should return
a string of 'is five' if the number is equal to 5 and `null` if it is not.
*/

//!!START
function isFive(num) {
  if (num === 5) {
    return 'is five';
  }
  // we don't have to wrap this in an `else` because if the above code did *not*
  // run then the number can't be 5 so we can just return false!
  return null;
}
//!!END

// console.log(isFive(5));      // => 'is five'
// console.log(isFive(13));     // => null
// console.log(isFive("apple")) // => null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isFive;
