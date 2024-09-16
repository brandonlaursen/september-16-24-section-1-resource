

## `Intro to JavaScript`

### What is Javascript?

- JavaScript is a programming language that was originally developed to increase user interactivity with websites, and has grown to become a useful programming language in the backend of applications as well. JavaScript is now one of the most popular and widely used programming languages for building web applications today.

### Why is javascript so useful?

- Perform asynchronous task
- Render dynamic content
- Enables more responsive, performant websites
- Integrates seamlessly with two core languages of web development, HTML and CSS
- We want to learn JavaScript!

### What is learning?

- Learning new skills and being able to apply them in the future
- Retaining useful information

### Active vs Passive Learning

- Active learning - lets you engage, get hands on!
- Passive learning - watching not applying
- **We will be doing both!**

### Desirable difficulty

- it's challenging, but not discouraging
- Possible given proper skill level
- Hard but not too hard
- But also not easy
- Find a Happy Medium

### Spaced Repetition

- Repeating concepts with time between
- Rest your brain
- Pomodoro Method

### What is debugging?

- Figuring out what is wrong with the code
- Identifying and solving an error

### How do we debug?

- console.log() - show them on mdn
- if you want to see something on the screen use a console.log
- debugger
- go line by line
- developer tools
- error messages
- trial and error

### How to style/format?

- Style Guide
- https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

### Whats the deal with semicolons?

- JS Automatic semicolon insertion
- semicolons Js doesn't strictly need semi colons because its smart, it uses something called automatic semicolon insertion, But it is best practice to use them for finishing statements
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion

### Why do we use comments?

- explain what your code is doing
- creating a plan using polya's framework!
- notes
- Console.logs

### When do we use a console.log?

- When we want to see something in the terminal

```js
// single line comment - // - double back slash

/*
this
is
a
multiline
comment
delineated by: - // forward slash + asterisk
*/

```

## `Comments!`

- use comments to explain what your code is doing
- creating a plan using polya's framework!
- notes
- when reviewing; try and write out what each line of code means; if you're unable to explain it; research on mdn! Reach out for help!
- command + / - quickly comment out code - mac
- ctrl + / - windows
- you can use comments to comment out code you dont want to be ran

- **we use console.log whenever we want to see something on screen**

```js
console.log("Welcome to app academy! :)");
```

- console.logs can be used to see what an expression evaluates too
- an expression is anything that results in a value
- a console.log will first evaluate an expression than print its value
- expression: must first be evaluated/executed to a single value
- value: data type: number, string, boolean, array, object,

```js
console.log(1 + 2 + 3); //6
let name = "brandon";
```

- variable evaluates to what it holds
- variables are expressions that are waiting to be evaluated to get the value

```js
console.log(name); //brandon
```

- console.log can also take in additional arguments
- useful for helping you pin down console.logs

```js
console.log("hey look here this is a name ->", name);
```
