




/*


  Arrays
  * Arrays are the most fundamental of all data structures.
  * A string, for example, is an array of characters in memory.
  * Arrays are the most time and space efficient way to store data

  * Definition: An array is a sequence of elements of the same type, stored in a contiguous block of memory
  ! JS arrays are not represented of all arrays in computer science
    * js do not have to have the same type

  * Not only are arrays the most space efficient method of data storage, they also allow the fastest method of access via indexing.
    * O(1) Access time - Thats fast!

  * Indexing formula (under the hood of .indexOf()):
    valueAddress = startAddress + index \* sizeof(dataType)

  * All three parts of this definition are required for O(1) indexing equation.
  * The reason that JavaScript arrays allow for different types is because they are actually hash tables (we'll get to those soon).
  * They contain a sequence of pointers (memory addresses) and each element's type is interpreted at runtime.

  let arr = [_ _ _ _ _ _ _];
  * Each index has its own memory address
  * Contiguous blocks of memory ->[01001001, 10100100, 01001001, 01001001, 01001001]
    Index -       0         1     2     3     4     6     7
      arr = [ StartAddress  _     _     _     _     _     _   ];


  let arr = [<empty>, <empty>, <empty>, <empty>], <function>, <obj>, 12

  arr.push(1);

            [1, 2, 3, 4]

  arr.push(2);
  arr.push(3);
  arr.push(4);

  arr.push(5);

      [1, 2, 3, 4, ]
      [1, 2, 3, 4, 5, 6, 7, 8]

  arr.push(6);
  arr.push(7);
  arr.push(8);

  arr.push(9);


  [1, 2, 3, 4, 5, 6, 7, 8, 9, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>]

  16
  32
  64
  128
  256
  512
  1024
  2048

*/


let arr = new Array(8);
// // console.log(arr);

// // arr.push(1);
// let length = 0;

// arr[length] = 0;
// length++;

// console.log(arr);


// // console.log(arr);
