



// global scope
// let name = "global scope";

function myFunc(param1, param2) {
  // function/local scope
  // let name = "function/local scope";

  if (true) {
    // block scope
    // let name = "block scope 1";

    for (let i = 0; i < 1; i++) {
      // another block scope
      // let name = "block scope 2";
      console.log(name); // block scope 2
      // * if were not able to find the variable we need in the immediate scope, js will scope chain to the outer scopes to find one, in this case, if js did not find name in block scope 2, js will scope chain up and find the name in block scope 1
      // *  we can go inward -> outward
      // ! not outward -> inward
    }
  }

  // global declared variable
  // ! don't do this
  x = "bad";
}

// myFunc();


// console.log(name);
function myFunc2() {
  let name = "brandon";
  // able to access x variable in a different scope
  console.log(x); // "bad"
}

// myFunc2();





function myFunc3() {
  let name = "initial value";

  for (let i = 0; i < 2; i++) {
    let name = "new value";
    // console.log(name)
  }

  console.log(name); // new value
}

// myFunc3();



let variable1; // variable declaration
variable1 = "string"; // variable assignment
let variable2 = "string"; // variable initialization

let global = 'what';

/*
  global
  myFunc3 :{
      global
    }
*/

let global1 = 'again';

function myFunc3(){


  let global1 = 'again';
  // console.log(global1);//
};

myFunc3();


/*
  global
  myFunc3 :{
      global
    }

*/

function testingVar() {
  // * hosting var
  // ! no error
  // console.log(test);// undefined
  var test = 1;
  // console.log(test);

  // * var can be reassigned
  test = 2;
  // console.log(test); // 2

  // * var can re declared
  // var test = 3;
  console.log(test); // 3

  // ! since var is function scope
  // * we can access var declared variables from an outer scope
  if (true) {
    var access = true;
  }

  // * var is function scoped
  // console.log(access); // true
}

// testingVar();



function testingLet() {
  // * hoisting let
  // ! error
  // console.log(test);// ReferenceError: test is not defined
  let test = 1;

  // * let can be reassigned
  test = 2;
  // console.log(test); // 2

  // * let cannot be re declared
  // let test = 3; // ERROR

  // ! let is block scope
  // ! we cannot access inner block from outer
  if (true) {
    let access = false;
  }

  // * let is block scopes
  // console.log(access);// ReferenceError: access is not defined
}

// testingLet();



function testingConst() {
  // * hoisting const
  // ! error
  // console.log(test);// ReferenceError: test is not defined
  const test = 1;

  // * const cannot be reassigned
  // test = 2;
  // console.log(test);// Cannot reassign a variable declared with const

  // * const cannot be re declared
  // const test = 3; // Cannot re declare a variable declared with const

  // ! const is block scope
  // ! we cannot access inner block from outer
  if (true) {
    const access = false;
  }

  // * const is block scopes
  // console.log(access);// ReferenceError: access is not defined
}

// testingConst();


// variables declared in the global scope are available
// * regardless of keyword
let global0 = 1;
const global2 = 2;
var global3 = 3;

function myFunc4() {
  // we can access these values from the function's scope
  console.log(global0);
  console.log(global2);
  console.log(global3);

  // * variable declared globally if no keyword is used
  global4 = 4;
}

// myFunc4();
// * we can access the global4 variable even tho we are going from a outward scope inwards
// ! this is error prone
// console.log(global0); // 4
