/*
Write a function called getKeys(obj) that iterates through the object and
returns an array of the object's keys only.
*/

//!!START
function getKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
  // return Object.keys(obj);
}
//!!END

// const obj = {
//   first: "1",
//   second: 2,
//   third: "three"
// }
// console.log(getKeys(obj));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getKeys;
} catch {}
