



function findLargerNum(num1, num2) {

  // console.log(Math.max(...[10, 20, 30]));

  return Math.max(num1, num2);

  return num1 > num2 ? num1 : num2;
  // if (num1 > num2) {
  //   return num1;
  // }
  // return num2;
}

// console.log(findLargerNum(100, 20));

function multiplyBiggerNumByTwo(num1, num2) {

  // let largerNum = findLargerNum(num1, num2);

  return findLargerNum(num1, num2) * 2;
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum * 2;
  // } else {
  //   bigNum = num2;
  //   return bigNum * 2;
  // }
};

// console.log(multiplyBiggerNumByTwo(10, 20))

function divideBiggerNumByThree(num1, num2) {

  return findLargerNum(num1, num2) / 3;
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }
};


// console.log(divideBiggerNumByThree(10, 20))

function eatMostTacos(sum1, sum2) {

  // let largerNum = findLargerNum(sum1, sum2);
  return `I ate ${findLargerNum(sum1, sum2)} tacos.`;
  // let bigNum;
  // if (sum1 > sum2) {
  //   bigNum = sum1;
  //   return `I ate ${bigNum} tacos.`;
  // } else {
  //   bigNum = sum2;
  //   return `I ate ${bigNum} tacos.`;
  // }
}

// console.log(eatMostTacos(10, 20));

function adoptSmallerDog(weight1, weight2) {

  let largerNum = findLargerNum(weight1, weight2);
  // let smallerNum = findLargerNum(weight1, weight2) === weight1

  // let smallerNum;
  // if(largerNum === weight1) {
  //   smallerNum = weight2
  // } else {
  //   smallerNum = weight1;
  // };

  let smallNum = findLargerNum(weight1, weight2) === weight1 ? weight2 : weight1;

  // console.log("smallerNum:", smallNum);
  // console.log("largerNum:", largerNum);
  return `I adopted a dog that weighs ${smallNum} pounds.`;
  // return `I adopted a dog that weighs ${findLargerNum(weight1, weight2) === weight1 ? weight2 : weight1} pounds.`;
  // let smallDog;
  // if (weight1 < weight2) {
  //   smallDog = weight1;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // } else {
  //   smallDog = weight2;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // }
}

console.log(adoptSmallerDog(10, 20));
/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
