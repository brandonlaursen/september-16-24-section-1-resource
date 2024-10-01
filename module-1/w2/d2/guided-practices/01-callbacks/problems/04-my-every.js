/*
Write a function called `myEvery` that behaves like the `Array.every`
method.
*/

function myEvery(array, callback){

  for(let personObj of array) {
    // console.log(personObj);
    // console.log(callback(personObj))
    if(!callback(personObj)) return false;
  };

  return true;
};

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
console.log("allFriendsStartWithA:", allFriendsStartWithA);

const allFriendsUnder10Years = myEvery(friends, friend => {
  return friend.yearsOfFriendship < 10;
}); // true

console.log("allFriendsUnder10Years:", allFriendsUnder10Years);
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    allFriendsStartWithA,
    allFriendsUnder10Years,
  };
} catch {}
