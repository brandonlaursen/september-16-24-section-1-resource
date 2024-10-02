/*
Given the `friends` array below, use the `Array.find()` method to get the first
friend whose name contains 3 or more vowels. Assign the output of
`Array.find()` to the `threeVowelFriend` variable.
*/

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];

let threeOrMoreVowels = (object) => {

  let vowels = 'aeiouAEIOU';
  let name = object.name;
  let count = 0;

  for(let letter of name) {

    if(vowels.includes(letter)) {
      count++;
    }
  };

  return count >= 3;
};

// console.log(threeOrMoreVowels({ name: 'Angela', yearsOfFriendship: 2 }));

// Hint: create an array of vowels to use in your solution.
// const threeVowelFriend = friends.find(threeOrMoreVowels);

const threeVowelFriend = friends.find((object) => {

  let vowels = 'aeiouAEIOU';
  let name = object.name;
  let count = 0;

  for(let letter of name) {
    // console.log(letter,'======')
    if(vowels.includes(letter)) {
      count++;
    }
  };

  return count >= 3;
});

console.log(threeVowelFriend); // { name: 'Angela', yearsOfFriendship: 2 }


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = threeVowelFriend;
} catch {}
