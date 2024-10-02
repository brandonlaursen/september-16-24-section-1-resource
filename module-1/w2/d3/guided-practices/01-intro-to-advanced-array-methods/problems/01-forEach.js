/*
Given the array `friends` below, use the `Array.forEach()` method to iterate
through each element and print the `name` and `yearsOfFriendship` properties
stylized as "`name`: `yearsOfFriendship` years".

For example: "Albert: 3 years"
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

for(let i = 0; i < friends.length; i++){
  let personObj = friends[i];
  // console.log(personObj);
  // console.log(`${personObj.name}: ${personObj.yearsOfFriendship} years`);
}


friends.forEach(    (personObj) => {
  console.log(`${personObj.name}: ${personObj.yearsOfFriendship} years`);
});

// names.forEach((name, i, names) => console.log(name, i, names));
// names.forEach((element, index, array) => console.log(element, index, array));


// Your code here

/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
