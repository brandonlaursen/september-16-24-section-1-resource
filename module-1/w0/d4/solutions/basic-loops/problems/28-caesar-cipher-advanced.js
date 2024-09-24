/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

function caesarCipher(string, num) {
    //!!START
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let alphabetIdx = alphabet.indexOf(char);
        if (alphabetIdx + num >= alphabet.length) {
            let newIdx = (alphabetIdx + num) % alphabet.length;
            let newChar = alphabet[newIdx];
            newString += newChar;
        } else {
            newString += alphabet[alphabetIdx + num];
        }
    }
    return newString;
    //!!END
}

// console.log(caesarCipher("apple", 1)); // "bqqmf"
// console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
// console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
