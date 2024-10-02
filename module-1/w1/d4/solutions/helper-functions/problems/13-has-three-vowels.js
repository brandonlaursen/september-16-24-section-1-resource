/*
Write a function isVowel(char) that accepts a single character string as an
argument and true if it is a vowel. Return false otherwise.
A vowel can be 'a', 'e', 'i', 'o', or 'u'.

Write a function hasThreeVowels(string) that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels. Use the hasVowel function as a helper
function.
*/

//!!START
function isVowel(char) {
  let vowels = "aeiou";
  return vowels.includes(char);
}

function hasThreeVowels(string) {
  let vowelCount = 0;
  let i = 0;
  while (i < string.length) {
    let char = string[i];
    if (isVowel(char)) {
      vowelCount++;
    }
    if (vowelCount === 3) return true;
    i++;
  }
  return false;
}
//!!END

// console.log(hasThreeVowels("delicious"));     //  true
// console.log(hasThreeVowels("bootcamp prep")); //  true
// console.log(hasThreeVowels("bootcamp"));      //  true
// console.log(hasThreeVowels("dog"));           //  false
// console.log(hasThreeVowels("go back"));       //  false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isVowel,
  hasThreeVowels
};
