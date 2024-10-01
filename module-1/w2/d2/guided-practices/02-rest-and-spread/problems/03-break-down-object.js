/*
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!
*/


function breakDownObj(obj) {

  let keys = Object.keys(obj);
  // console.log(keys);// [ 'name', 'age', 'speak' ];

  let values = Object.values(obj);
  // console.log(values);// [ 'Rupert', 5, 'Meow' ]

  let result = [...keys, ...values];

  return result;
}

console.log(breakDownObj(
  { name: 'Rupert', age: 5, speak: 'Meow' }
)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
// console.log(breakDownObj(
//   { location: 'NY', borough: 'Brooklyn' }
// )); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = breakDownObj;
} catch {}
