
## `Conditionals`

Let us control what we decide to do, creates a decision making tree for our code
Conditionals cans be used to control the flow of our program

- By providing conditions, and commands on what to do if conditions are met or not
- there are many types of conditions we can check

Conditional statements will act as control for the flow of our apps and functions.

- The basic structure of a conditional statement looks like:

```js
if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}
```

```js
let num = 20;

if (num > 10) {
  console.log("number is greater than 10");
} else if (num < 10) {
  console.log("number is less than 10");
} else {
  console.log("number is 10");
}
```

### Mutually exclusive condition

- A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should use an if/else statement.
- You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

```js
let side = "heads";

if (side === "heads") {
  console.log("heads");
} else {
  console.log("tails");
}
```

### Truthy and Falsy values

- https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.

```js
if (true) {
  console.log("this code will always execute");
}

if (0) {
  console.log("this will not run, 0 is a falsey value");
}
```




## `Loops`
  Loops provide us a way to repeat behavior a set number of times.

  * We can use that behavior to progress through data structures and take a look at individual elements.
  * Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop/meeting the condition

  There are may use cases of loops!
  * counting numbers
  * progressing through strings/arrays
    * we loop through these data types to get information
    * arrays can hold user information that we may need to access to print to the string


### While loops
 * When would we use a while loop over a for loop?
 * Whenever we don't know how many times we need to iterate
 * If you want an action to repeat itself until a certain condition is met or while a condition is met

 While loops will execute while their condition is true.
 * You'll want to make sure the expression that steps your loop towards completion is embedded within the body of your loop.

 Components of a loop
*
```js
  let i = 0;
   //* A condition where to start
   //* we can start anywhere
   //* We control the boundaries!

 while (i <= 5) {
  //* while this is condition is true, execute the code in this block

  console.log(i); // print the value to the console

  i++;
  //* step towards meeting the condition
  //* increment our i variable by 1 after each iteration
  //* same thing as, i += 1, i = i + 1
}
```


### For loop

* `let i = 0`; initial expression, where to start
* `i <= 5`; condition to be met
* `i++`; increment i by 1, step to completing the loop
* Remember `index's` start at `0`
* Print every number between 0 up to 5 an increments of 1
```js
for (let i = 0; i <= 5; i++) {
  console.log(i); // 0 1 2 3 4 5
}
```


### Iterating through a word
```js

// function takes in a parameter 'umbrella' represented by the variable word
function iterateThroughWord(word) {
  // * were saying start from the first index
  // * iterate as long as i < word.length
  // * word.length evaluates to 8
  // * so as long as i is less than 8 keep going
  // * increment i by one each time
  for (let i = 0; i < word.length; i++) {
    // * word[i] changes as i changes
    // * each iteration i is changed by 1
    // console.log(word[0]);
    // word[0] = u
    // word[1] = m
    // word[2] = b
    let letter = word[i];
    // * for clarities sake, be descriptive in your variable names
    // * what is the variable at i?
    // * using i as a variable is more dynamic than indexing one by one
    console.log("value at index: ", word[i], "index: ", i); // can access current value at word[i]
    console.log("letter variable: ", letter); // or through variable that holds word[i]
  }
}

// call the function
// pass an arguments umbrella
iterateThroughWord("umbrella");
// * function has no return
```

### Reverse a string
```js

// reverse a name
// * show them iterating backwards
function reverseName(name) {
  // concatenate on to reversedName string
  let reversedName = "";
  // start at name variables last index - 1
  // * we subtract account for the zeroth index
  // b r a n d o n
  // 0 1 2 3 4 5 6
  // brandon.length = 7
  // if we started at 7; there is no 7th index; so we subtract 1
  // we iterate while i is greater than the index if the first letter which is 0
  // we want to start from 6 and iterate down to 0 in increments of 1
  // 3 > 0 => 2 > 0 => 1 > 0 => 0 > 0 - STOP
  for (let i = name.length - 1; i >= 0; i--) {
    // console.log(name[i]);
    // name[name.length - 1]
    // name[name.length - 1 - 1]
    // name[name.length - 1 - 2]
    let letter = name[i];
    reversedName += letter;
    console.log("reversedName: ", reverseName);
  }
  return reversedName;
}

console.log("return value of reverseName", reverseName("brandon")); // nodnarb
```

### Log Between
```js
function logBetween(num1, num2) {
  // for(let i = num1; i <= num2; i++) {
  //   console.log(i)

  // show only even numbers
  // can change i++ to i+=2 as well
  // if(i % 2 === 0) {
  //     console.log(i)
  //   }

  // }

  let i = num1;
  while (i < num2) {
    console.log(i);
    i++;
  }
}

logBetween(1, 10); //1,2,3,4,5,6,7,8,9,10
```

