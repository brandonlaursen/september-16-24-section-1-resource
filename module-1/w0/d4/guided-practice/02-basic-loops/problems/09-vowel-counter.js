






/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
  bootcamp
  o o a = 3
  apple
  a e   = 2

  0 1 2 3 4 5 6 7  8 9
  b o o t c a m p
*/

// function myIncludes(word){
//   for(let j = 0; j < vowels.length; j++) {
//     let vowel = vowels[j];
//     if(vowel === letter) {
//       count++;
//     }
//   }
// }

let vowels = 'aeiouAEIOU';
// let vowels1 = ["a", "e", "i", "o", "u"];

function countVowels(word){

  let count = 0;
  for(let i = 0; i < word.length; i++) {
    let letter = word[i];

    if(vowels.includes(letter)) {
      count++;
    }
    // for(let j = 0; j < vowels.length; j++) {
    //   let vowel = vowels[j];
    //   if(vowel === letter) {
    //     count++;
    //   }

    // }
  };
  return count;
}

// console.log(countVowels("bootcamp")); // => 3
// console.log(countVowels("apple"));    // => 2
// console.log(countVowels("pizza"));    // => 2
// console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
