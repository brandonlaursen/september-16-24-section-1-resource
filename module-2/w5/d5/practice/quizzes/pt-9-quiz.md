```javascript
function arrayNums(n) {
  const arr = [];
  for (let i = 0 ; i < n ; i++) {
    arr.unshift(i);
  }
  return arr;
}
arrayNums(10);
```

<quiz>
  <question>
    <p>What is the time complexity of `arrayNums`?</p>
    <answer correct>O(n<sup>2</sup>)</answer>
    <answer>O(n)</answer>
    <answer>O(1)</answer>
    <answer>O(n<sup>3</sup>)</answer>
    <explanation>`arr.unshift` is O(n), and is called _n_ times by the for loop, for a time complexity of O(n<sup>2</sup>).</explanation>
  </question>
</quiz>


```javascript
function timesThreePlusTen(n) {
  let total = 0;
  for (let i = 0 ; i < n ; i++) {
    total++;
  }
  for (let j = 0 ; j < n ; j++) {
    total++;
  }
  for (let k = 0 ; k < n ; k++) {
    total++;
  }
  for (let l = 0 ; l < 10 ; l++) {
    total++;
  }
  return total
}
```

<quiz>
  <question>
    <p>What is the time complexity of `timesThreePlusTen`?</p>
    <answer correct>O(n)</answer>
    <answer>O(n<sup>3</sup>)</answer>
    <answer>O(3n)</answer>
    <answer>O(33)</answer>
    <answer>O(3n + 10)</answer>
    <explanation>This will loop 3n + 10 times but big-O ignores coefficients and insignificant figures, which reduces down to O(n)</explanation>
  </question>
</quiz>

```plaintext
A   B     A && (!A || !B)
------------------------
0   0      ?
0   1      ?
1   0      ?
1   1      ?
```

<quiz>
  <question>
    <p>What are the truth table values for `A && (!A || !B)`? Results should be in order from top to bottom.</p>
    <answer correct>0, 0, 1, 0</answer>
    <answer>1, 1, 0, 1</answer>
    <answer>0, 0, 0, 1</answer>
    <answer>1, 0, 1, 0</answer>
    <explanation>The expression returns true only when `A` is true and `(!A || !B)` is false (or by de Morgan's law, when `!(A && B)` is true).</explanation>
  </question>
</quiz>



<quiz>
  <question multiple>
    <p>Which two of the following are equal to 0xC9?</p>
    <answer correct>201</answer>
    <answer>0b11101001</answer>
    <answer>"C9"</answer>
    <answer correct>0x00C9</answer>
    <explanation>0xC9 is the hexadecimal representation of the decimal value 201. 0b11101001 has a hex value of 0xE9 and the string representation is not equal.</explanation>
  </question>
</quiz>






<quiz>
  <question>
    <p>How many bits are in 10 kilobytes?</p>
    <answer>10 million</answer>
    <answer correct>80 thousand</answer>
    <answer>10 thousand</answer>
    <answer>10</answer>
    <answer>80 million</answer>
    <explanation>There are one thousand bytes in a kilobyte and 8 bits byte. Therefore, there are 80 thousand bits in 10 kilobytes.</explanation>
  </question>
</quiz>


<quiz>
  <question>
    <p>Which of these best describes a pointer?</p>
    <answer correct>A byte value that indexes a location in memory</answer>
    <answer>A memory cache</answer>
    <answer>A data structure that stores a single byte of memory</answer>
    <answer>A data structure that indicates the head of a linked list</answer>
    <explanation>A pointer is a byte address for a location in memory. Data structures like linked lists use pointers but are not defined by them.</explanation>
  </question>
</quiz>


<quiz>
  <question multiple>
    <p>What are the three requirements that allow array values to be indexed in constant time?</p>
    <answer correct>Stores values of the same data type</answer>
    <answer>Indexed using a hash/modulo function</answer>
    <answer correct>Occupies a contiguous block of memory</answer>
    <answer correct>Stores elements in sequential order</answer>
    <explanation>Arrays index using the equation `valueAddress = startAddress + index * dataSize` which requires ordered, uniform data that occupies a contiguous block of memory.</explanation>
  </question>
</quiz>




<quiz>
  <question>
    <p>What is the worst-case time complexity of `array.push()` in a dynamic array and what causes it?</p>
    <answer>O(n), if the processor is simultaneously running an expensive operation in the background.</answer>
    <answer correct>O(n), if the array has to resize to a new block of memory</answer>
    <answer>O(n<sup>2</sup>), if it used in a recursive function</answer>
    <answer>`array.push()` is always O(1)</answer>
    <explanation>Pushing to the end of a dynamic array usually happens in O(1) time as long as there are free spaces. Otherwise, it will need to resize and copy all elements to the new location, which is worst-case O(n). Resizing happens infrequently due to over-allocation.</explanation>
  </question>
</quiz>



<quiz>
  <question multiple>
    <p>Which of the following describes the order values are added and retrieved from a _stack_?</p>
    <answer>First in, first out</answer>
    <answer>Last in, last out</answer>
    <answer correct>First in, last out</answer>
    <answer correct>Last in, first out</answer>
    <explanation>Stacks are described by both first-in-last out, and last-in-first-out.</explanation>
  </question>
</quiz>

```js
function first(n) {
  if (n < 0) return;
  console.log(n);
  first(n - 1);
}
function second(n) {
  arr = [];
  for (let i = 0 ; i <= n ; i++) {
    arr.unshift(i);
  }
  console.log(arr.join('\n'));
}
```

<quiz>
  <question>
    <p>Which of these functions has the worst space complexity?</p>
    <answer>`first` is worse</answer>
    <answer>`second` is worse</answer>
    <answer correct>They both have the same space complexity</answer>
    <explanation>Both of these have the same space complexity: O(n). `first`'s comes from space on the call stack while `second`'s comes from filling the array.</explanation>
  </question>
</quiz>
