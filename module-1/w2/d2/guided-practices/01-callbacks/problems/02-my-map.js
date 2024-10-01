/*
Write a function called `myMap` that behaves like the `Array.map`
method.
*/
function myMap(array, callback){
    // console.log(array, callback);

    let result = [];

    for(let personObj of array) {
      // console.log(personObj);
      let bool = callback(personObj);
      // console.log("bool:", bool);
      result.push(bool);
    };

    return result;
}

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

// let res = friends.map((personObj) => personObj.yearsOfFriendship > 5)
// console.log(res);

const goodFriendsOrNot = myMap(
  friends,
  friend => friend.yearsOfFriendship > 5
); // [false, false, true, true]

console.log(goodFriendsOrNot);

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
