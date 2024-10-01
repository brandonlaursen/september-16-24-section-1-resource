/*
Write a function called getValues(obj) that iterates through the object and
returns an array of the object's values only.
*/

//!!START
function getValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
  // return Object.values(obj);
}
//!!END

// const car = {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2011
// }
// console.log(getValues(car)); // ['Toyota', 'Corolla', 2011]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getValues;
} catch {}
