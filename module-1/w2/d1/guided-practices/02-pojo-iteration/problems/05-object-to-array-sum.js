/*
Write a function called objectToArraySum(obj) that iterates through all
key-value pairs of the object and returns an array of nested array where each
nested array is formatted such that the first element is the key and the second
element is the sum of all the numbers in the array value.
*/



let objectToArraySum = (obj) =>{
  // console.log(obj);

  let result = [];

  let keysArr = Object.keys(obj);
  // console.log(keysArr);// [ 'neighborhood1', 'neighborhood5', 'neighborhood8' ]

  for(let i = 0; i < keysArr.length; i++){
    let key = keysArr[i];
    // console.log(key);
    let valueArr = obj[key];// [ 10, 1, 3, 6 ]
    // console.log(valueArr);
    // ['neighborhood1']
    // console.log(valueArr);
    let sum = 0;
    for(let num of valueArr) {
      // console.log(num);
      sum += num;
    }
    // console.log(sum);


    let subArr = [key, sum];
      // console.log(subArr);
    result.push(subArr);
  }

  return result;
}

let populations = {
  neighborhood1: [10, 1, 3, 6],
  neighborhood5: [],
  neighborhood8: [5, 0, 3, 2]
};

console.log(objectToArraySum(populations));
//=> [  ['neighborhood1', 20],    ['neighborhood5', 0], ['neighborhood8', 10]]




/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArraySum;
} catch {}
