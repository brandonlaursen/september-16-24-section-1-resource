/*
Write a function removeLastVowel(word) that takes in a word string and returns
the word without its last vowel.

Write a function hipsterfy(sentence) that takes in a sentence string and returns
the sentence where every word is missing its last vowel. Use the removeLastVowel
function as a helper function.
*/

//!!START
function removeLastVowel(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];

    if ("aeiou".includes(letter.toLowerCase())) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
}

function hipsterfy(sentence) {
  let newSentence = [];
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newSentence.push(removeLastVowel(word));
  }

  return newSentence.join(" ");
}
//!!END

// console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
// console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
// console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
// console.log(hipsterfy("go big or go home")); // 'g bg r g hom'
// console.log(hipsterfy("dont let your dreams be dreams")); // 'dnt lt yor drems b drems'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeLastVowel,
  hipsterfy,
};
