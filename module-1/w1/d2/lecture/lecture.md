# `Week 1 Day 4 Homework Review`
- splice
- split and join


### Slice
1. Does not mutate input array
2. returns a copy of a portion of an array into a new array
3. from start to end exclusive
  * `array.slice(start, end);`
  * `start - index at which to start the subsection of the array`
  * `end - index at which to end the subsection of the array`
*/
```js
let sliceArr = [1,2,3,4,5,6,7,8,9];
let noArgs = sliceArr.slice(); //the whole array
let oneArg = sliceArr.slice(4); //[5,6,7,8,9]
let twoArg = sliceArr.slice(4,7) //[5,6,7]
```


### Splice
1. Mutates input array
2. changes the contents by removing or replacing elements in place
- `array.splice(start, deleteCount, item1, item2, itemN)`
- `start - index at which to start changing the array`
- `deleteCount - number of items to remove from the start index`
- `item1, ...itemN - elements to add to the input array`

```js
let spliceArr = ['James', 'William', 'Jeffrey', 'Blake', 'Kristen'];

spliceArr.splice(1, 1);

console.log(spliceArr);
```

### Split
1. Does not mutate input string
2. Splits a string into a new array

- `string.split(separator, limit)`

- `separator - The pattern describing where each split should occur`
- `limit - an number specifying a limit on the number of elements in the array`

```js
let splitStr = 'this is an input string';

let strArr = splitStr.split(' ');

console.log(strArr);
```


### Join
1. Does not mutate input array
2. Joins an array into a new string

- `array.join(separator)`

- `separator - A substring to insert into the return string in-between each element`

```js
let stringsArr = [ 'this', 'is', 'an', 'input', 'string' ];

let joinedArr = stringsArr.join(' ');

console.log(joinedArr);
```
