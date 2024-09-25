/*
Write a function containsWord(sentence, targetWord) that accepts two strings as
args. The function should return a boolean indicating whether the targetWord is
found inside of the sentence. Solve this without using String's indexOf() or
includes() methods.
*/

//!!START
function containsWord(sentence, targetWord) {
    let sentenceArr = sentence.split(' ');

    for (let i = 0; i < sentenceArr.length; i++) {
        let word = sentenceArr[i];

        if (word.toLowerCase() === targetWord.toLowerCase()) {
            return true;
        }
    }
    return false;
}
//!!END

// console.log(containsWord('sounds like a plan', 'like')); // true
// console.log(containsWord('They are great', 'they')); // true
// console.log(containsWord('caterpillars are great animals', 'cat')); // false
// console.log(containsWord('Cast the net', 'internet')); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = containsWord;
