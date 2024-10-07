


function myFunc(num) {
  debugger
  if(num === 0) return 0;
  console.log(num);

  num -= 1;
  return myFunc(num) + num;
}


// console.log(myFunc(5));// 10
