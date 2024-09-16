# `Week 1 Day 2 Homework Review`
- Variables
- Expressions
- Numbers
- Booleans
- Comparison Operators
- Strings


## `Variables`
  * A variable is a named reference to a value.
  * That way an unpredictable value can be accessed through a predetermined name.
  * Can be used to store the result of an expression
  * Think of it like placing an item in a box

### Value could be
  * string
  * numbers
  * boolean
  * function
  * and more!

### Variable naming guide
  * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

### Three parts to a variables
  1. **Variable initialization**
  - Both declaring and assignment
  2. **Variable declaration**
  * declaring the variable
  3. **Variable assignment**
  * assigning a value to a variable

  ### = - is the assignment operator
  * Used to assign and save a value to a variable

  ### When should you use a variable?
  * When you want to alias data through a specific name
  * Make code more readable
  Cons
  * Uses up the global name space; decide if we want to do that or not

  `If we don't assign a variable a value it will default to undefined`


```js
let variableName; //variable declaration

console.log(variableName);// undefined

variableName = "hello"; //variable assignment

```

* Use the let keyword ``let``
* followed by variable name ``variableName``
* then assignment operator  ``=``
* then the value to assign to the variable ``hello``
```
let variableName2 = "hello 2"; // variable initialization
```
### We can store many data types in a variable
```js
let firstName = "brandon"; // string
let age = 27; // number
let isSoftwareEngineer = true; // boolean
```

### We can store expressions in a variable
 * the variable will hold the result of the expression being executed
```js
let math = 1 + 2 + 3;
console.log(math); // 6
console.log("hello " + firstName + "!"); // hello brandon
```

### If we want to see what a variables holds
  * use console.log
  * use them often!
```js
console.log(firstName); //brandon
console.log(age); //27
console.log(isSoftwareEngineer); //true
```

### Variable reassignment
```js
console.log(age);
// * we can reassign the = assignment operator
age = 300; // no let keyword
console.log(age);

// Assignment shorthand
let num = 0;
// console.log(num);
num++;
console.log(num); //1

// num++ is shorthand for
num += 1;
console.log(num); //2

// num += 1 shorthand for
num = num + 1;
console.log(num); //3

num + 1;
// What will print?
console.log(num); // 3 - no assignment operator

console.log(num + "hey"); // 1hey
```

### Know your data types!
  * The plus operators doubles as addition and concatenation
  * if we use the + operator with a string it will type cast the other data type even if its not a string

### We can check our data types using typeof operator

```js
let number = "1";
console.log(typeof number);
console.log(typeof 1 === "number");
console.log(typeof true === "boolean");
// * can typecase using + or Number
console.log(typeof +number === "number"); // type cast this  string using the + into a number
console.log(typeof 1);
```


## `Expressions`
  * If you think of coding as a language, an expression is like a sentence, a variable is a noun, and a keyword is a verb. A sentence combines nouns, verbs, and other elements of language to bring across a single point. It takes words and produces meaning.

  * An expression is a statement that evaluates to something as opposed to a value which is something, or a keyword that does something.

### Numbers
```js
console.log(10 + 5);
console.log(100 / 20);
```
### Booleans
```js
console.log(true || false);
console.log(!true && ! false);
```

### Strings
```js
console.log('hello' + ' ' + 'world');
console.log('welcome' + ' to ' + 'App Academy')
```

- We can store expressions in variables
- We do this so we dont have rewrite them

```js
let sum = 10 + 10;

let name = 'Brandon';
let greeting = 'Hello' + ' ' + name;

let boolean = true || false;
```

We can see what a variable holds by using a console.log
```js
console.log(sum);// 20
console.log(greeting);// Hello Brandon
console.log(boolean);// true
```

## `Numbers`

- Use numbers to run math, calculate values, represent an amount

### Types of Numbers

- whole numbers
- decimals
- negative numbers
- few other special cases

### What is PEMDAS?

- Order of operations
- parentheses, exponents, multiplication, modulo, division, addition, subtraction

### Numbers in JS

- Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
- JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
- A number literal like 37 in JavaScript code is a floating-point value, not an integer.
- There is no separate integer type in common everyday use. (JavaScript also has a BigInt type, but it's not designed to replace Number for everyday uses. 37 is still a number, not a BigInt.)
- The JavaScript Number type is a double-precision 64-bit binary format IEEE 754

### **What will these expression evaluate too?**

```js
console.log(2 + 3 * 12); // 38
console.log(10 - 8 / 2); // 6
console.log(20 / 2); // 10
console.log(1.11 * 3); // 3.33
console.log((4 + 5) / 2); // 4.5
```

### Modulo

- returns a remainder

```js
console.log(13 % 5); // 3
```

- we divide 5 into 13 twice, there will be 3 as a remainder

```js
console.log(3 % 7); // 3
```

- 3 cant divide by 7, we return 3

### **What will these expression evaluate too?**

```js
console.log(12 % 5); // 2
console.log(25 % 6); // 1
console.log(5 % 18); // 5
```

## `Booleans`

- Booleans can be used to represent true and false
- We can perform actions based on true/false

### Logical operators
     ! - not (bang)
     && - and
     || - or

### Order of operators
     not, and, or

### **What do logical operators return?**

- Logical operators return a boolean

### **What will these expression evaluate too?**

```js
console.log(false); // false
console.log(!true); // false
console.log(true || false); // true
console.log(true && false); // false
```

### DeMorgan's law

- distribute the sign, and flip the symbol

```js
console.log(!true || !false); //true
console.log(!(true && false)); //true

  !(A && B) => !A || !B
  !(A || B) => !A && !B
```

- This is not only useful for boolean simplification, but also for general problem solving
- https://erikmhsiao.github.io/de-morgans-laws/

### **Can we store a boolean in a variable?**

- YES

```js
let a = true;
let b = false;
console.log(a || b); //true
```

- expression will be evaluated then printed to the terminal

## `Comparison Operators`

Used to compare values, to perform an action

### What are the comparison operators?

```
    <, <=, ==, ===, >=, >
```

### What do they return?

- A boolean

```
    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too
```

### **What will these expression evaluate too?**

```js
console.log(2 < 3); // true
console.log(10 > 5); // true
console.log(10 === 10); // true
console.log(10 == "10"); // true - check just the value
console.log(10 === "10"); // false - check data type and value
```

### How it compares all letters?

- it loops through the string by index and performs a comparison at each one

```
 Lexicographically a > b
 0 1 2 3 4 5...
 a b c d e f...
```

- Type in node man ascii
- https://www.asciitable.com/

```js
 let a = 'a';
 let Z = 'Z'

console.log(a < Z.toLowerCase());
console.log("the value of a: ", a);
console.log("the value of Z: ", Z);
console.log("the value of Z.toLowerCase(): ", Z.toLowerCase());
```

## `Strings`

  ## What are strings?
  * Strings are delineated with "", or '' or `` which we learn next week
  * Collection of characters in memory

  ## Wrapper objects
  * When we treat a primitive value like it was an object (i.e. by accessing properties and methods), JavaScript creates, under the hood, a wrapper to wrap this value and expose it as an object. The JS engine never reuses a wrapper object, giving them to the garbage collector right after a single use.
  * https://programmingwithmosh.com/javascript/javascript-wrapper-objects/


### Printing a string to the terminal
```js
console.log("why did the blind fall in the well?");
console.log("he couldnt see that well");
console.log("What is the most used language in programming?"); // profanity
console.log("What did the router say to the doctor?"); // it hurts when ip

// strings can be stored in variables
// strings can be letter, word, sentences
let newString = "Cool strings!";
let newString2 = "Another cool string!";

// what if you need to use quotes
let sentence3 = ' "You\'re great!!" said Tony! ';
let sentence4 =
  '  "You miss 100% of the shots you don\'t take." -Wayne Gretzky  - Micheal Scott ';
```

### String methods!
  * all strings have a length property
  * tell us how many characters their are
  * lets evaluate an expression
```js
console.log("brandon".length); // 7
let lastName = "laursen";
let lastNameLength = lastName.length;
console.log(lastNameLength); // 7
```
* track the variable names, find the value they hold!


### Indexing
 * Strings have indexes
 * indexes in programming start at 0!

```
length of 4
VALUE - c a t s undefined undefined
INDEX - 0 1 2 3     4         5
```
```js
let animal = "cats";
console.log(animal.length); //4

// we can index a string to get the value at that index
console.log(animal[0]); // c
console.log(animal[1]); // a
console.log(animal[2]); // t
console.log(animal[3]); // s
console.log(animal[4]); // undefined

// we can access the last value of a string using
console.log(animal[animal.length - 1]); // s
// * were basically saying, hey whats the length of the animal string, whatever it is subtract 1 and index and give me that value
// * we are evaluating an expression and logging it the terminal

// cant index a index that does not exist
console.log(animals[10]); // undefined

// String methods
// * .indexOf method returns the first index at which a given element can be found an array, -1 if it is not present
// ! always go to mdn

let animal2 = "rhino";

console.log(animal2.indexOf("r")); // 0
console.log(animal2.indexOf("o")); // 4
console.log(animal2.indexOf("z")); // -1

// concatenation
let word1 = "Whiteboards";
let word2 = "remarkable.";

let res = word1 + " are " + word2;
console.log(res);

// alternative - concatenation
console.log(word1.concat(" are ", word2));

// concatenation
let greeting = "Hello " + firstName + " " + lastName + "!";
// console.log(greeting);

// lets do the same things with string interpolation
let newGreeting = `Hello ${firstName} ${lastName}!`;
console.log(newGreeting); // Hello brandon laursen!
```
