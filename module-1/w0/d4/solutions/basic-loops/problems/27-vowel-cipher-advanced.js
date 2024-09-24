/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

//!!START
let vowels = "aeiou"

function vowelCipher(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            if (vowels.indexOf(str[i]) === vowels.length - 1) {
                newStr += vowels[0];
            } else {
                let vowelsIdx = vowels.indexOf(str[i]);
                newStr += vowels[vowelsIdx + 1];
            }
        } else {
            newStr += str[i];
        }
    }
    return newStr
}
//!!END

// console.log(vowelCipher("bootcamp")); // "buutcemp"
// console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
