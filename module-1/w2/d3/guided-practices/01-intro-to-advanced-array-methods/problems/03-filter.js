/*
Given the array `friends` below, use the `Array.filter()` method to filter the
array to only contain friends whose name starts with an "A" and who has been
friends for over 5 years. Assign the output of `Array.filter()` to the
`filteredFriends` variable.
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

function myFunc(friends) {


  let filteredFriends = friends.filter(   (personObj) => {
    // if(personObj.name[0] === 'A' && personObj.yearsOfFriendship > 5){
    //   return true;
    // } else {
    //   return false;
    // }

    return personObj.name[0] === 'A' && personObj.yearsOfFriendship > 2;
  });

  // console.log(filteredFriends);// [ { name: 'Agatha', yearsOfFriendship: 6 } ]
  return filteredFriends;

}


console.log('==>',myFunc(friends));

// console.log(filteredFriends); // [ { name: "Agatha", yearsOfFriendship: 6 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
