/*
Write a function called `myMap` that behaves like the `Array.map`
method.
*/

//!!START
const myMap = (arr, cb) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let el = arr[i];
    newArr.push(cb(el, i, arr));
  }
  return newArr;
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

const goodFriendsOrNot = myMap(
  friends,
  friend => friend.yearsOfFriendship > 5
); // [false, false, true, true]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
