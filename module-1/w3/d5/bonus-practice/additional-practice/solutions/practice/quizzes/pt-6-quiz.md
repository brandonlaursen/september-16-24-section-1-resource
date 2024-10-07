<!-- Asynchronous Functions -->

```javascript
console.log('hello'); // line 1
// line 2
console.log('world'); // line 3
```

<quiz>
  <question>
    <p>In the code above, if you execute an asynchronous function call on line 2 that will print `'goodbye moon'`, will 'goodbye moon' print before `'world'`?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <explanation>Asynchronous function calls will always execute sometime after all the function calls in the current stack.</explanation>
  </question>
</quiz>

<!-- JavaScript Trivia -->

<quiz>
  <question>
    <p>The String primitive data type has methods.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>The Object type is the only data type in JavaScript that has methods.</explanation>
  </question>
</quiz>

```js
console.log(sayGoodbye("Jeff"));

const sayGoodbye = function(name) {
  return `Goodbye ${name}`;
}
```

<quiz>
  <question>
    <p>What will happen when the above code snippet is run?</p>
    <answer>`"Goodbye Jeff"` will be printed to the console</answer>
    <answer>`TypeError: sayGoodbye is not a function`</answer>
    <answer correct>`ReferenceError: Cannot access 'sayGoodbye' before initialization`</answer>
    <explanation>The `sayGoodbye` variable is an unnamed function declaration so it will not be hoisted in memory.</explanation>
  </question>
</quiz>
