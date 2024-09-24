/*
Arrays and Mutability: Use what you have learned about arrays and mutability to
complete the problems below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/10-plate-the-dishes-spec.js
*/

// Define a function called plateTheDishes that takes in two arrays as two
// parameters. The first array could contain null or string values. The second
// array contains string values. Mutate the first array so that all the null
// values from left to right get replaced with the string values in the second
// array from left to right. Return the first array.

// For example, plateTheDishes([null, 'burger', null], ['salad']) should return
// ['salad', 'burger', null].

// If there are more string values in the second array than there are null
// values in the first array, do NOT add them to the end of the first
// array.

/*

  arr1 = ['salmon', 'soup', rice, ]
                       i = 2 ^
  arr2 = ['soup', 'rice']
                j = 1 ^

  output: ['salmon', 'soup']
*/

function plateTheDishes(arr1, arr2) {
  // console.log(arr1, arr2);

  let j = 0;
  for(let i = 0; i < arr1.length; i++){
    let ele1 = arr1[i]

    let ele2 = arr2[j];
    // console.log(ele1, ele2);
    if(ele1 === null && ele2 !== undefined) {
      arr1[i] = ele2;
      j++;
    };
  };
  // console.log(arr1);
  return arr1;
}


// console.log(plateTheDishes([null, 'burger', null], ['salad'])); //=> ['salad', 'burger', null]
console.log(plateTheDishes(['salmon', null], ['soup', 'rice']));
//
//  should return ['salmon', 'soup']

//! [ 'salmon', 'rice' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = plateTheDishes;
