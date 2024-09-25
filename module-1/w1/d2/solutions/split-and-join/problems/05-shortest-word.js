/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

//!!START
function shortestWord(sentence) {
    let sentenceArr = sentence.split(' ');
    let shortest = sentenceArr[0];

    for (let i = 1; i < sentenceArr.length; i++) {
        if (sentenceArr[i].length <= shortest.length) {
            shortest = sentenceArr[i];
        }
    }
    return shortest;
}
//!!END

// console.log(shortestWord('what a wonderful life'));     // 'a'
// console.log(shortestWord('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
