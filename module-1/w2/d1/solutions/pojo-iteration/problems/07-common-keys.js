/*
Write a function called commonKeys(obj1, obj2) that returns an array of all the
common keys between the two input objects, obj1 and obj2.
*/

function commonKeys(obj1, obj2) {
  //!!START
  let keys = [];
  for (let key in obj1) {
    if (key in obj2) keys.push(key);
  }
  return keys;
  //!!END
}

// console.log(commonKeys(
//   { species: 'Dog', color: 'Brown',  numLegs: 4 },
//   { numLegs: 8, species: 'Octopus', lifeSpan: '2 years' }
// )); // => [ 'species', 'numLegs' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = commonKeys;
} catch {}
