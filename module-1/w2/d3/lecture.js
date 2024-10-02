


// forEach
// mdn
const array1 = ['a', 'b', 'c'];

// i = 0
// i < array1.length
// i ++
// 0 - 'a'  -> ('a') => console.log(element)
// 1 - 'b'  -> ('b') => console.log(element)
// 2 - 'c'  -> ('c') => console.log(element)
// 3 - stop
// let returnVal = array1.forEach(   (element, i, array) => console.log(element, i, array)     );
// console.log(returnVal);//  undefined
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



function includesTwo(arr) {

  // for(let i = 0; i < arr.length; i++){
  //   let num = arr[i];
  //    console.log(num);
  //    if(num === 2) return true;
  // }

  let bool = false;

  let returnVal = arr.forEach((num, i, arr) => {

    console.log(num);
    if(num === 2) bool = true;


  });
  console.log("returnVal:", returnVal);// returnVal: undefined

  return true;
}


// console.log(includesTwo([1,2,3,4,5]));




//map

const array2 = [1, 4, 9, 16];

// Pass a function to map
// i = 0; i < array1.length; i++
// let map1 = [ 2, 8, 18, 32  ]
// i = 0 - (1) =>  { return 1 * 2 }
// i = 1 - (4) =>  { return 4 * 2 }
// i = 2 - (9) =>  { return 9 * 2 }
// i = 3 - (16) =>  { return 16 * 2 }
// i = 4 - stop
// const map1 = array2.map((x) => x * 2);

const map1 = array2.map(function doubled(x, i , array) {

  // console.log(x, i , array);
  return x * 2
  // return true;

});

// console.log(map1);
// console.log(array2.map((x) => x * 2));
// Expected output: Array [2, 8, 18, 32]


// const words = ['an', 'array', 'of ', 'words'];


// let upperCased = words.map((word) => word.toUpperCase());
// console.log("upperCased:", upperCased);// [ 'AN', 'ARRAY', 'OF ', 'WORDS' ]


// const words = ['an', 'array', 'of ', 'words'];




const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// result = ['exuberant', 'destruction', 'present' ]
// i - 0 - 'spray' - ('spray') => 'spray'.length > 6
// i - 1 - 'spray' - ('elite') => 'elite'.length > 6
// i - 2 - 'spray' - ('exuberant') => 'exuberant.length > 6
// i - 3 - 'destruction' - ('destruction') => 'exuberant.length > 6
// i - 4 - 'present' - ('present') => 'present'.length > 6
// i 5
const result = words.filter(function(word){

  return word.length > 15
  // return false;
});

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// find

const array3 = [5, 12, 8, 130, 44];

const found = array3.find((element) => element > 10);

// console.log(found);
// Expected output: 12
