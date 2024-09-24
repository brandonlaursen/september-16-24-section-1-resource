/*
Define a function called oddRange that takes in a number parameter and returns
an array  containing all positive odd numbers up to that number.
*/

//!!START
function oddRange(num){
    let numArr = [];
    for(let i = 1; i <= num; i++){
        if(i % 2 !== 0) numArr.push(i);
    }
    return numArr
}
//!!END


// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddRange;