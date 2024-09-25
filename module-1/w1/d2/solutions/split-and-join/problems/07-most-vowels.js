/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

//!!START
let vowels = "aeiou";

function mostVowels(sentence) {
    let sentenceArr = sentence.split(' ');
    let highestVowelCount = 0;
    let mostVowelsWord = "";

    for (let i = 0; i < sentenceArr.length; i++) {
        let word = sentenceArr[i];
        let vowelCount = 0;
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
        if (vowelCount > highestVowelCount) {
            highestVowelCount = vowelCount;
            mostVowelsWord = word;
        }
    }
    return mostVowelsWord;
}
//!!END

// console.log(mostVowels("what a wonderful life")); // "wonderful"
// console.log(mostVowels("the quick brown fox jumps")); // "quick"
// console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
