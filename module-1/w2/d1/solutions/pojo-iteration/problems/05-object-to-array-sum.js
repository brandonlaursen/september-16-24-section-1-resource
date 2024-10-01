/*
Write a function called objectToArraySum(obj) that iterates through all
key-value pairs of the object and returns an array of nested array where each
nested array is formatted such that the first element is the key and the second
element is the sum of all the numbers in the array value.
*/

//!!START
function objectToArraySum(obj) {
  let arr = [];
  for (let key in obj) {
    let val = obj[key];
    let sum = 0;
    for (let ele of val) {
      sum += ele;
    }
    arr.push([key, sum]);
  }
  return arr;

  // OR:
  // let arr = Object.entries(obj);
  // for (let nestedArr of arr) {
  //   let val = nestedArr[1];
  //   let sum = 0;
  //   for (let ele of val) {
  //     sum += ele;
  //   }
  //   nestedArr[1] = sum;
  // }
  // return arr;
}
//!!END

// let populations = {
//   neighborhood1: [10, 1, 3, 6],
//   neighborhood5: [],
//   neighborhood8: [5, 0, 3, 2]
// }
// console.log(objectToArraySum(populations));
// //=> [['neighborhood1', 20], ['neighborhood5', 0], ['neighborhood8', 10]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArraySum;
} catch {}
