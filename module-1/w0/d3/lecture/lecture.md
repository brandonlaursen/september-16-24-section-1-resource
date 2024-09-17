
## `Functions`

### What is a function?

- A function is a procedure of code that will run when called.
- Writing a function is known as a function declaration or function definition
- We create functions so we do not have to repeat the same line of code, allows us to reuse logic
- Javascript reads top to bottom
- Function is not read till its called/invoked `functionName()`

### Function Vocabulary

- `Function definition/declaration` - The defining of the function
  - This contains the logic of the function as well as the parameters
- `Function call/invocation` - The calling of the function
  - This is what tells JavaScript to read the function
  - This is where arguments are passed
- `Parameter` - A variable used to represent the argument passed positionally
- `Argument` - Values to pass to a function
- `Return` - The return keyword is what a function will evaluate too

### Three things to remember about return statements are:

1. Every function call evaluates to its return value.

```js
function functionName() {
  return "Hello World";
}

functionName(); // Hello World
```

2. Every function in JavaScript returns undefined unless a return is specified.

```js
function functionName() {
  // This function has no return
}
functionName(); // undefined
```

3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring any code below the return statement.

```js
function functionName() {
  // This function has no return
  return "Hello World";
  console.log("Will not be reached");
}
functionName(); // "Hello World"
```

### Function naming convention

- CamelCase - `functionTest`
- Descriptive names
  - verb followed by a noun, CRUD `getInfo`, `deleteInfo`, `editInfo`
- If the return value is a Boolean, the name should be `isValue`
  where Value is whatever we are checking

### Declaring/Defining the function

- Parameters are used to represent the arguments passed
  function
  - `param1` will be a variable used to represent positionally `argument1`
  - `param2` will be a variable used to represent positionally `argument2`

```js
functionName(param1, param2){
 return param1 + param2;
}
```

Parameters are like variables and can be named whatever you want

```js
functionName(banana, apple){
 return banana + apple;
}
```

### Calling/invoking the function and passing arguments

Here we are calling the multiply function

- We take in two `parameters` `num1` and `num2`
- `num1` represents the first `argument` passed `num1 = 4`
- `num2` represents the second `argument` passed `num2 = 5`

```js
function multiply(num1, num2) {
  return num1 * num2;
}
```

Here we are `invoking/calling` the multiply function

- We are passing `4` as the first `argument`
- We are passing `5` as the as the second `argument`
  - The `parameters` will be the variables used to represent these `arguments` passed

```js
multiply(4, 5); // 20
```

### Console.log

`Use a console.log if you want to see the output of a function`

```js
console.log(multiply(4, 5)); // 20 will be printed to the terminal
```

- We are logging what the function evaluates too `20`
- Which is its `return` value
- If there is no `return` value
  - A function evaluates to `undefined`
- If we do not use a `console.log`
  - we will see `nothing` printed to the terminal

### Order of execution

Javascript reads top to bottom
Anytime a function is called, js will enter the function and run the code within in the function

```js
// Will not be read until called
function myFunc() {
  console.log("second");
}

console.log("first");
myFunc();
console.log("third");
```

`We will see first, second, third printed to the console`

### Storing a function a variable

We can store functions as an expression in a variable

```js
function addition(num1, num2) {
  return num1 + num2;
}

let sum = addition(10, 12);
console.log(sum); // 22

let newSum = sum + 50;
console.log(newSum); // 72
```
