```plaintext
/sample-project
├── README.md
├── package.json
├── src
│   ├── assets
│   │   ├── index.html
│   │   ├── css
│   │   │   └── application.css
│   │   └── package.json
│   └── server
│       ├── index.js
│       └── app.js
└── test
    ├── html-spec.js
    └── index-spec.js
```

<quiz>
  <question>
    <p>Using the above folder structure how would you navigate from the **assets** directory to the **server** directory?</p>
    <answer correct>`cd ../server`</answer>
    <answer>`cd server`</answer>
    <answer>`cd ../src/assets`</answer>
    <answer>`cd src/assets`</answer>
    <explanation>To get to the server directory from assets, you need to go one folder up and then into "server".</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>True or False: An object is an example of an immutable data type.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>JavaScript Objects are mutable.</explanation>
  </question>
</quiz>

```js
const a = { b: "c" };
```

<quiz>
  <question>
    <p>What is one way you can overwrite the value of key `b` in the object `a` above?</p>
    <answer correct>By using dot notation to set the key of `b` to a new value</answer>
    <answer>By setting `a` to a new object with the key of `b`</answer>
    <answer>By using Object's `setOwnProperty` method to change the value at the key of `b` to a new value</answer>
    <explanation>You can use dot notation to set the key of `b` to a new value. E.g. `a.b = "d"`.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Can you use array destructuring to swap elements in an array?</p>
    <answer correct>Yes</answer>
    <answer>No</answer>
    <explanation>You can use array destructuring to swap the elements in an array or even assign them to new values. e.g. `[ele1, ele2] = [ele2, ele1]`</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>True or False: Destructuring an object must assign **every** value in the object to a variable.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>When destructuring an object, you need to know what keys to set to extract as variable names and select the ones you want to destructure. You have the option to choose what variables you need, and or want.</explanation>
  </question>
</quiz>


```js
function destructure({ key1, key2 }) {
  // ...
}
```

<quiz>
  <question>
    <p>If you pass in an object that isn't destructured in the parameters of the function above, will you have access to the object's value of `key3` in the `destructure` function?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <explanation>You need to destructure `key3` in the parameters of the function if you want to use it in the function.</explanation>
  </question>
</quiz>
