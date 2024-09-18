/*
Refactor checkIfLastCharIsAnE

Refactor the function `checkIfLastCharIsAnE` to have only one line of code in
the function code block instead of three lines of code.
*/

// 1. Define a function with the name `checkIfLastCharIsAnE`.
// 2. Define a single parameter for the function called `str`.


function checkIfLastCharIsAnE(str) {
    // console.log('1.',str);
    // 3. Find the last character of `str`.
    // stance[5]
    let lastChar = str[str.length - 1];
    // console.log('2.', lastChar);// e

    // 4. Transform the last character of `str` to a lowercase character
    // lastChar = lastChar.toLowerCase();
    // console.log('3.',lastChar);

    // 5. Return true if the last character of `str` is an 'e'. Otherwise
    //    return false.
    // console.log('4.',lastChar === 'e')

    // return lastChar === 'e';
    // str.toLowerCase()[(str.length - 1)] === 'e'
    return str[str.length - 1].toLowerCase() === 'e';
};


console.log(checkIfLastCharIsAnE('stance')); //=> true
console.log(checkIfLastCharIsAnE('FLOAT'));  //=> false
console.log(checkIfLastCharIsAnE('PHONE'));  //=> true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = checkIfLastCharIsAnE;
