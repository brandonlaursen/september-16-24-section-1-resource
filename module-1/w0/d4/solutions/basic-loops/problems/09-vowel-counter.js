/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

//!!START
let vowels = 'aeiou'

function countVowels(word) {
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}
//!!END

// console.log(countVowels("bootcamp")); // => 3
// console.log(countVowels("apple"));    // => 2
// console.log(countVowels("pizza"));    // => 2
// console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
