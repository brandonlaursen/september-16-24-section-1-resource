/*
Define a function fizzBuzz(max) that takes a number and prints every number from
0 to max (not inclusive) that is divisible by either 3 or 5, but not both.
*/

//!!START
function fizzBuzz(max) {
    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) &&
            !(i % 3 === 0 && i % 5 === 0)) {
            console.log(i);
        }
    }
}
//!!END

// fizzBuzz(20); // prints out:
/*
3
5
6
9
10
12
18
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;
