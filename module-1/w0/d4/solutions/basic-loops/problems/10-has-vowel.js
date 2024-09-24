/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

//!!START
let vowels = 'aeiou'

function hasVowel(str) {
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return true
        }
    }
    return false;
}
//!!END

// console.log(hasVowel('dog'));          // => true
// console.log(hasVowel('conventional')); // => true
// console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
