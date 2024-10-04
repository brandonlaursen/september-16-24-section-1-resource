```js
function example() {
  // ...
  if (true) {
    // ...
  }
  // ...
}
```

<quiz>
  <question>
    <p>Will variables declared using `const` in the `if` block in the code above be available in the `example` function's scope?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <explanation>`const` variables are block-scoped so they can only be accessed by any blocks outside of their own block or any inner blocks.</explanation>
  </question>
</quiz>

```js
function example() {
  // ...
  if (true) {
    // ...
  }
  // ...
}
```

<quiz>
  <question>
    <p>Will variables declared using `var` in the `if` block in the code above be available in the `example` function's scope?</p>
    <answer correct>Yes</answer>
    <answer>No</answer>
    <explanation>`var` variables are function-scoped so they can only be accessed anywhere in scope of the function they are defined in.</explanation>
  </question>
</quiz>
