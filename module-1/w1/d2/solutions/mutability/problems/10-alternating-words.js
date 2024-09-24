/*
Write a function alternatingWords that accepts an array of words as an argument.
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.
*/

//!!START
function alternatingWords(words) {
    for (let i = 0; i < words.length; i++) {

        if (i % 2 === 0) words[i] = words[i].toUpperCase();
        else words[i] = words[i].toLowerCase();
    }
    return words
}
//!!END

// let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

// let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = alternatingWords;