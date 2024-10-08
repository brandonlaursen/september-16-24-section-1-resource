/*
Write a function commonFactors that accepts two numbers as arguments. The
function should return an array containing positive numbers that are able to
divide both arguments.
*/

//!!START
function commonFactors(num1, num2) {
    const returnArr = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) returnArr.push(i)
    }
    return returnArr
}
//!!END


// console.log(commonFactors(4, 8));              // [1, 2, 4]
// console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
// console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
// console.log(commonFactors(7, 9));              // [1]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = commonFactors;