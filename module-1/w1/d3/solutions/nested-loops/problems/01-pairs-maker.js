/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/

//!!START
function pairsMaker(arr) {
  // console.log(arr)
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let p1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let p2 = arr[j];
      res.push([p1, p2]);
    }
  }
  return res;
}
//!!END

// console.log(pairsMaker(["a", "b", "c", "d"]));
// //=> [ [ 'a', 'b' ],
// //     [ 'a', 'c' ],
// //     [ 'a', 'd' ],
// //     [ 'b', 'c' ],
// //     [ 'b', 'd' ],
// //     [ 'c', 'd' ] ]

// console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
