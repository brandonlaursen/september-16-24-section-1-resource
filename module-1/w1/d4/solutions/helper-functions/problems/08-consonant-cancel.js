/*
Write a function firstVowel(word) that takes in a word string and returns the
index of the first vowel in the word.

Write a function consonantCancel(sentence) that takes in a sentence and returns
a new sentence where every word begins with it's first vowel. Use the firstVowel
function as a helper function.
*/

//!!START
function firstVowel(string) {
  let vowels = "aeiou";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (vowels.includes(letter)) {
      return string.slice(i);
    }
  }
}

function consonantCancel(sentence) {
  let words = sentence.split(" ");
  let newSentence = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newSentence.push(firstVowel(word));
  }
  return newSentence.join(" ");
}
//!!END

// console.log(consonantCancel("down the rabbit hole"));               // "own e abbit ole"
// console.log(consonantCancel("writing code is challenging"));        // "iting ode is allenging"
// console.log(consonantCancel("practice makes perfect"));             // "actice akes erfect"
// console.log(consonantCancel("fear nothing challenge everything!")); // "ear othing allenge everything!"
// console.log(consonantCancel("stay happy!"));                        // "ay appy!"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  firstVowel,
  consonantCancel,
};
