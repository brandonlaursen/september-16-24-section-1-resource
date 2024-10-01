/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.
*/

//!!START
function get2CKeys(obj) {
  let keys = [];
  for (let key in obj) {
    let val = obj[key];
    let strIdx = 0;
    let countCs = 0;
    while (strIdx < val.length) {
      let char = val[strIdx];
      if (char === 'c') {
        countCs += 1;
      }
      if (countCs >= 2) {
        keys.push(key);
        strIdx = val.length;
      }
      strIdx += 1;
    }
  }
  return keys;
}
//!!END

// const obj = {
//   red: 'circle',
//   blue: 'octagon',
//   green: 'square'
// }
// console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
