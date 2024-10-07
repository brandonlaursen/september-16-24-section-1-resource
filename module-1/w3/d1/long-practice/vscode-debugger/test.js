



function foo(word) { // define function foo that accepts param word
  debugger; // trigger debugger, jumps to next function call
  console.log(word); // console.log the value stored in word param
  bar("barber"); // invoke bar function with string "barber"
}


function bar(word) { // define function bar that accepts param word
  debugger; // trigger debugger
  console.log(word); // console.log the value stored in word param
  baz("bazaar");  // invoke baz function with string "bazaar"
}

function baz(word) { // define function baz that accepts param word
  console.log(word); // console.log the value stored in word param
  debugger; // trigger debugger
}

// foo("food");


let names = ['brandon', 'charles', 'Anabel', 'trevor'];
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
  // debugger;
}


function test() {
  debugger;
  let name = "brandon";
  // debugger;
  name = name.toUpperCase();
  // debugger;

  if (false) {
    name = "false";
    // debugger;
  }
  if (true) {
    name = "krandon";
    // debugger;
  }

  if (1) {
    let name = "1";
    // debugger;
  }

  // debugger;
}

test();
