/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

//!!START
function doubleLetterCount(str) {
    let count = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            count++;
        }
    }
    return count;
}
//!!END

// console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
// console.log(doubleLetterCount("bootcamp")); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
