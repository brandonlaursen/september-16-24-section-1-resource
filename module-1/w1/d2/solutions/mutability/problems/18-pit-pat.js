/*
Write a function pitPat(max) that accepts a number as an arg. The function
should return an array containing all positive numbers less than or equal to max
that are divisible by either 4 or 6, but not both.
*/

//!!START
function pitPat(max) {
    const returnArr = [];
    for (let i = 1; i <= max; i++) {
        if ((i % 4 === 0) && (i % 6 !== 0)) returnArr.push(i);
        else if ((i % 6 === 0) && (i % 4 !== 0)) returnArr.push(i)
    }
    return returnArr;
}
//!!END


// console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
// console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pitPat;