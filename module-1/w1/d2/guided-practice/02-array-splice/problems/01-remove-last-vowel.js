let numbers = [10, 20, 30, 40, 50];

// start, deletion, inserting
// let expression = 1 + 4 * 8 / 5
let num = 0;
let deleted = numbers.splice(num, 2);

// console.log("deleted:", deleted);
// console.log("numbers:", numbers);

/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".

  input: 'bootcamp'
  output: 'bootcmp'
   0 1 2 3 4 5 6 7
 [ b o o t c a m p]
        ^
  i = 5
  splice(5, 1);// bootcmp

  1. define a function that takes in a string
  2. use split - turn string into array
  3. iterate
    start - string.length - 1
    condition - i >= 0
    step - i--
    check if current letter is a vowel
      if it is, splice it off!
  4. turn the array back into string - join('');

*/

let vowels = ["a", "e", "i", "o", "u"];
function removeLastVowel(string, num) {
  // console.log(string);// bootcamp
  let wordArr = string.split("");
  // console.log(wordArr); // ["b", "o", "o", "t", "c", "a", "m", "p"];

  let count = 0;
  let result = string;
  for(let i = wordArr.length - 1; i >= 0; i--){
    let letter = wordArr[i];
    // console.log(letter);
    if(vowels.includes(letter) && count < num){
      // console.log(letter, i);
      // 5
      wordArr.splice(i, 1);
      result = wordArr.join('');
      console.log("result:", result);

      count++;
      // console.log(result, wordArr);

      // console.log(result);
      // return wordArr.join('');
      // break;
    }
  }

  return result;
  // return string;
  // return wordArr.join('');
}

console.log(removeLastVowel("bootcamp", 1)); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
