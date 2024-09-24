/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

//!!START
function moreDotLessDash(str) {
    let dots = 0;
    let dashes = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            dots++
        } else if (str[i] === "-") {
            dashes++;
        }
    }
    return dots > dashes;
}
//!!END

// console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
// console.log(moreDotLessDash('Morse code is great.'));                   // true
// console.log(moreDotLessDash('.... . -.--'));                            // true
// console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
// console.log(moreDotLessDash('high-flying acrobat.'));                   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
