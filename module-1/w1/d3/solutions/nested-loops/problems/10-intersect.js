/*
Define a function called intersect that takes in two array parameters and
returns a new array containing the elements common to both arrays.
*/

//!!START
function intersect(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    let el1 = arr1[i];
    for (let m = 0; m < arr2.length; m++) {
      let el2 = arr2[m];
      if (el1 === el2) {
        res.push(el1);
      }
    }
  }
  return res;
}
//!!END

// console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); //=> [ 'b', 'd' ]
// console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); //=> []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = intersect;
