# Is This The Real Object? Is This Just FantIIFE?

## `IIFE`

## Immediately Invoked Function Expression

The two important pieces of an IIFE. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

1. The first is the anonymous function enclosed within the Grouping Operator `()`. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

```zsh
(function goes in here!)
```

2. The second part creates the immediately invoked function expression `()` through which the JavaScript engine will directly interpret the function.

```zsh
(...func...)(you have to invoke me like any other function!)
```

We can use IFFE's wherever you would normally invoke a function, even saving it's return to a variable!

```js
(function () {
  console.log("I run immediately");
})();

let checkThisOut = ((name) => {
  return `Hello, ${name}!`;
})("Zaviar");

console.log(checkThisOut);
```

Primarily used to avoid polluting the global namespace. Useful for situations
where you only need a function to run once.

---

## Primitive vs Reference again

JS has been lying to you, types are not what they seem!

```js
let str = "Praise The Sun!";
let num = 32;
let bool = false;

console.log(typeof str); // string (but secretly not)
console.log(typeof num); // number (but secretly not)
console.log(typeof bool); // boolean (but secretly not)
```

`Objects` are the only things with methods

Any primitive types with methods in JS are secretly "wrapped" with an object

```js
// What we write
let str = "Solaire";

// Behind the scenes JS
let str = {
  0: "S",
  1: "o",
  2: "l",
  3: "a",
  4: "i",
  5: "r",
  6: "e",
  length: 7,
  slice: (start, end) => {
    // slice things
  },
  // etc.
};
```

## What about Arrays or Functions?

Arrays & Functions are not listed in the primitive types, but they're not listed as reference types either.

They are reference types however, because they are simply specialized objects!

```js
// What we write
let arr = ["a", 2, false];

// Behind the scenes JS
let arr = {
  0: "a",
  1: 2,
  2: false,
  length: 3,
};
```

It might seem weird to think of functions as objects, but they are! Here's the proof:

```js
// Remember, ONLY objects have methods!
const myFunc = (val1, val2) => {
  return val1 + val2;
};
console.log(myFunc.call); // [Function: call]
console.log(myFunc.call(null, 5, 10)); // 15
console.log(myFunc.toString());
// (val1, val2) => {
//     return val1 + val2;
// }
```

---

## Truthy and Falsy

Falsy Values

|       |           |
| ----- | --------- |
| 0     | -0        |
| 0n    | ""        |
| null  | undefined |
| false | NaN       |

Everything else is Truthy!

---

## Function Hoisting

Similar to how JS can hoist variables it can also hoist functions.

- Variable Hoisting

```js
//var
const withVar = () => {
  console.log(animal);
  var animal = "Cat";
};

withVar(); // undefined

//const

const withConst = () => {
  console.log(animal);
  const animal = "Dog";
};

withConst(); // Reference Error
```

- Function Hoisting

```js
// function declaration

hello(); // hello

function hello() {
  console.log("hello!");
}

// function expression

hello(); // Reference Error

let hello = function () {
  console.log("hello!");
};

// function expression with var

console.log(hello); // undefined
hello(); // Type Error

var hello = function () {
  console.log("hello!");
};

// function declaration with var

var foo = "I'm a variable";

function foo() {
  return "I'm a function";
}

console.log(foo); // I am a variable

// function declaration with let/const

let foo = "I'm a variable";

function foo() {
  return "I'm a function";
}

console.log(foo); // Syntax Error
```
