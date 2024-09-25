/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/



let pairsMaker = function(arr) {

  let pairs = [];
  for(let i  = 0 ; i < arr.length; i++){
    let ele1 = arr[i];
    // console.log("ele1:", ele1);
    // console.log(ele1);

    for(let j = i + 1; j < arr.length; j++){
      let ele2 = arr[j];
      // console.log(" ele2:", ele2);
      // pairs.push([ele1, ele2]);
      let pair = [];
      pair.push(ele1, ele2);
      // console.log(pair);
      pairs.push(pair);

      // console.log(pairs);
    }
    // break;
  };
  return pairs;
};


console.log(pairsMaker(["a", "b", "c", "d"]));
//=> [ [ 'a', 'b' ],
//     [ 'a', 'c' ],
//     [ 'a', 'd' ],
//     [ 'b', 'c' ],
//     [ 'b', 'd' ],
//     [ 'c', 'd' ] ]

// console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
