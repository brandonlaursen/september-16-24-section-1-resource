/*
Write a function called `myFilter` that behaves like the `Array.filter`
method.
*/

// for(let i = 0; i < 5; i++){
//   console.log(<h1>hello<h1/>);
// }

function myFilter(array, callback){

  let result = [];

  for(let personObj of array){
    // console.log(personObj);
    // console.log(callback(personObj));
    // let bool = callback(personObj);
    if(callback(personObj)) {
      result.push(personObj);
    }
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

let res = friends.filter(friend => friend.name[0] === "A" && friend.yearsOfFriendship > 5)
// console.log("res:", res);

const filteredFriends = myFilter(friends, friend => {

  return friend.name[0] === "A" && friend.yearsOfFriendship > 5;
}); // [ { name: 'Agatha', yearsOfFriendship: 6 } ]

console.log("filteredFriends:", filteredFriends);
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
