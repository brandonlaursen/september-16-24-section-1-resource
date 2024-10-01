/*
Write a function called countElements(arr) that takes in an array and returns
an object with all the elements in the string as keys and the frequency that
the elements show up in the string as values.
*/

function countElements(arr) {
  //!!START
  let count = {};
  for (let ele of arr) {
    if (!(ele in count)) count[ele] = 0;
    count[ele]++;
  }
  return count;
  //!!END
}

// console.log(countElements(
//   ['app', 1, 2, 'app', 2, 2]
// )); // => { app: 2, 1: 1, 2: 3 }


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = countElements;
} catch {}
