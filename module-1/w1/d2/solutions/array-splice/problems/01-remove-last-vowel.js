/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

//!!START
let vowels = "aeiou";

function removeLastVowel(word) {
    let wordArr = word.split('');

    for (let i = wordArr.length - 1; i > 0; i--) {
        if (vowels.includes(wordArr[i])) {
            wordArr.splice(i, 1);
            return wordArr.join('');
        }
    }
    return wordArr.join('')
}
//!!END

// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
