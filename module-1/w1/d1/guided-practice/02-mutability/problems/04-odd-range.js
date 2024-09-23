/*
Define a function called oddRange that takes in a number parameter and returns
an array  containing all positive odd numbers up to that number.
*/



// console.log(5 % 2 !== 0);// true;
// console.log(4 % 2 !== 0);// false

// input - num = 13
function oddRange(num){

  // define an array
  let arr = [];

  // start - 1
  // condition - i <= num - interate up to the num including it
  // step - i + 1
  for(let i = 1; i <= num; i++){
    // console.log(i);

    // how do we get only odd numbers?
    // use conditional
    // how do we check if num is odd
    if(i % 2 !== 0) {
      arr.push(i);
    };

    // console.log(arr, i)
  }

  //output - [ 1, 3, 5, 7, 9, 11, 13 ]
  return arr;

}


// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddRange;
