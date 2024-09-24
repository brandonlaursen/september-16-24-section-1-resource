/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

//!!START
let vowels = 'aeiou'

function abbreviate(word) {
    let abbreviated = ""
    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i].toLowerCase())) {
            abbreviated += word[i];
        }
    }
    return abbreviated;
}
//!!END

// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
