/*
Write a function alternatingWords that accepts an array of words as an argument.
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.

input: [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];

output: [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

    0        1         2        3        4
'BELKA', 'strelka', 'LAIKA', 'dezik'

0, 2 - upper cased
1, 3 - lower cased

* all words at even indexes are upper cased
* all words at odd indexes are lowercase cased

  push - anytime you need add an element to end of an array
  join - turn an array into a string
  slice - to make copy - slice off a section of an array, does not mutate original

*/

function alternatingWords(words) {

  // return words.map();

  //      0        1         2         3
  // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ];
  // i = 4
  for (let i = 0; i < words.length; i++) {
    // let word = words[i];

    if (i % 2 === 0) {
      words[i] = words[i].toUpperCase();
    } else {
      words[i] = words[i].toLowerCase();
    }
  }

  console.log(words);
  return words;
}

let words1 = ["Belka", "STRELKA", "laika", "DEZIK"];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

// let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = alternatingWords;
