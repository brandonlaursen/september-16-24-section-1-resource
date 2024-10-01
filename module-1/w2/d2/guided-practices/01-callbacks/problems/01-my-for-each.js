/*
Write a function called `myForEach` that behaves like the `Array.forEach`
method.
*/


function myForEach(array, callback) {
  // console.log(array, callback);

  for(let personObj of array) {
    // console.log(personObj);
    // console.log(personObj.name);
    // console.log(callback(personObj));
    callback(personObj)
  }
}

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3,
  },
  {
    name: "Angela",
    yearsOfFriendship: 2,
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8,
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6,
  },
];

// friends.forEach((personObj) =>   console.log(personObj.name + ": " + personObj.yearsOfFriendship + " years"))

myForEach(friends, (friend) => {
  console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
});

// function callback(obj) {
//   console.log(obj.name + ": " + obj.yearsOfFriendship + " years");
// }

// callback({
//   name: "Agatha",
//   yearsOfFriendship: 6,
// });



/* prints:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = myForEach;
} catch {}
