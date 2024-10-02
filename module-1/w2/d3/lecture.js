


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
