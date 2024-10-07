<instructions>
Write a function `makeAnimalSound(animal, sound)` that accepts two strings. Use
**string interpolation** to return a new string using both arguments.  See the
examples for more information.
</instructions>

```repl-node

// your code here!


console.log(makeAnimalSound("cow", "moo")); // => "cow goes moo!"
console.log(makeAnimalSound("DUCK", "QUACK")); // => "DUCK goes QUACK!"
```

```solution-node
function makeAnimalSound(animal, sound) {
  return `${animal} goes ${sound}!`;
}

console.log(makeAnimalSound("cow", "moo")); // => "cow goes moo!"
console.log(makeAnimalSound("DUCK", "QUACK")); // => "DUCK goes QUACK!"
```
