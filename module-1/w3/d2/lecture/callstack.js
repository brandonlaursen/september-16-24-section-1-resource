
/*



  Call Stack!
    * The call stack is a structure that js uses to keep track of evaluation of function calls
    * function is at the top stack, it is the function currently being executed
    * stack data structure
      * EX: Stack of plates
    * first in last out
    * when a function is called, it is pushed on the call stack
    * when a function is returned, it is popped off the call stack


*/



function myFunc(num){
  console.log(num);
  return num + 10
};

// console.log(myFunc(12));

// const expression = myFunc(10) + myFunc(20);
// console.log("expression:", expression);// 50







function foo() {
  console.log("a");
  debugger;
  bar();
  console.log("e");
}

function bar() {
  console.log("b");
  debugger;
  baz();
  console.log("d");
}

function baz() {
  debugger;
  console.log("c");
}

foo(); //a,b,c,d,e
