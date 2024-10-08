/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

// 7;

// 1 + 6;

// 1 + 5;

// 1 + 4;

// 1 + 3;

// 1 + 2;

// 1 + 1;

/**
 * fib(1) = 1
 * fib(2) = 1
 * fib(3) = fib(2) + fib(1)
 * fib(4) = fib(3) + fib(2)
 * fib(5) = fib(4) + fib(3)
 */

function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// function fib(n) {
//     if (n == 0 || n == 1) return n;

//     return fib(n - 1) + fib(n - 2);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
