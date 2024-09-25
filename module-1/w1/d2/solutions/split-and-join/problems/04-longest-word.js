/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

//!!START
function longestWord(sentence) {
    let sentenceArr = sentence.split(' ');
    let longest = "";

    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i].length > longest.length) {
            longest = sentenceArr[i];
        }
    }
    return longest;
}
//!!END

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
