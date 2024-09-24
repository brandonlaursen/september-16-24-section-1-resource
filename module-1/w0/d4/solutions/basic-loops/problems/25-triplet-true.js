/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

//!!START
function tripletTrue(str) {
    if (str.length < 3) {
        return false;
    }

    for (let i = 2; i < str.length; i++) {
        if ((str[i - 2] === str[i - 1]) &&
            (str[i - 1] === str[i]))
            return true;
    }
    return false;
}
//!!END

// console.log(tripletTrue('caaabb'));        // true
// console.log(tripletTrue('terrrrrible'));   // true
// console.log(tripletTrue('runninggg'));     // true
// console.log(tripletTrue('bootcamp'));      // false
// console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
