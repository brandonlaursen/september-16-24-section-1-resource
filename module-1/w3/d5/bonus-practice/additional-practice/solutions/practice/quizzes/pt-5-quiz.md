[//]: # Recursion

```js
function workOut(exercises) {
  if (exercises) {
    console.log(exercises.shift());
    workOut(exercises);
  }
}

workOut(["yoga", "jog"]);
```

<quiz>
  <question>
    <p>
      Which of the following should we add to prevent an error from the above
      function?
    </p>
    <answer>A recursive step</answer>
    <answer correct>A base case</answer>
    <answer>A parameter</answer>
    <explanation>
      This function will exit when `exercises` is truthy, but `exercises` will always be truthy so you'll be working out indefinitely! You need a base case to exit the recursive call stack.
    </explanation>
  </question>
</quiz>

[//]: # JavaScript Trivia

```js
let value;
```

<quiz>
  <question>
    <p>What is the value of `value`?</p>
    <answer>`value`</answer>
    <answer correct>`undefined`</answer>
    <answer>`null`</answer>
    <answer>`0`</answer>
    <answer>`Error`</answer>
    <explanation>An declared but unassigned `let` variable will by default evaluate to `undefined`.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Can you invoke an IIFE more than once through a single run of your code?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <explanation>IIFE's are defined and invoked at the same time. Since the function is only defined once, you can only invoke it once.</explanation>
  </question>
</quiz>

```js
if ("") {
  // will code here run?
}
```

<quiz>
  <question>
    <p>Will code in the `if` block above run?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <explanation>The string `""` is an empty string so the condition will evaluate to `false` because an empty string is falsey.</explanation>
  </question>
</quiz>
