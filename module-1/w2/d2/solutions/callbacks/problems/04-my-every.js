/*
Write a function called `myEvery` that behaves like the `Array.every`
method.
*/

//!!START
const myEvery = (arr, cb) => {
  for(let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (!cb(el, i, arr)) return false;
  }
  return true;
}
//!!END

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

const allFriendsStartWithA = myEvery(friends, friend => {
  return friend.name.startsWith('A');
}); // false

const allFriendsUnder10Years = myEvery(friends, friend => {
  return friend.yearsOfFriendship < 10;
}); // true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    allFriendsStartWithA,
    allFriendsUnder10Years,
  };
} catch {}
