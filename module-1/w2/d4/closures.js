function grocerylist(list) {
  function addItem() {
    list.push("and ice cream");
  }

  // * invoke addItem function
  // * note the changes are reflected in the list
  addItem();

  return list;
}

// console.log(grocerylist(["milk", "eggs"])); // 'milk', 'eggs', 'and ice cream' ]



for(let i = 0; i < 3; i++){
  let arr = [];
  // <r1>
  // <r2>
}




function elephantCollector() {
  let elephants = ["dumbo"];

  return function inner(name) {
    elephants.push(name);
    return elephants;
  };
}

// console.log(elephantCollector);// [Function: elephantCollector]
// console.log(elephantCollector());// [Function: inner]

/*

lexicalEnv:

  elephantCollector[<referenceA>]:{
      elephants
      inner
    }

    elephantParade1[<referenceC>]:{
      elephants: <referenceB> -> ['dumbo']
      name: 'zunesha',
      elephants: <referenceB>['dumbo', 'zunesha']
      }
    }


    elephantParade2[<referenceE>]:{
      elephants: <referenceD>['dumbo']
      inner: {
      name: 'funkfreed',
      elephants: <referenceD>['dumbo','funkfreed']
      }
    }


*/
//
// elephantCollector -> <referenceA>
// elephants -> <referenceB>
// eleParade1 -> <referenceC>
// let elephantParade1 = elephantCollector();
// console.log(elephantParade1('zunesha')); // [ 'dumbo', 'zunesha' ]
// console.log(elephantParade1('brandon')); // [ 'dumbo', 'zunesha' ]

// // elephantCollector -> <referenceA>
// // elephants -> <referenceD>
// // elephantParade2 => <referenceE>
// let elephantParade2 = elephantCollector();
// console.log(elephantParade2('funkfreed'));// [ 'dumbo', 'funkfreed' ]
// console.log(elephantParade2('horton'));
// // console.log('==>',elephantCollector()());

// call stack
// whenever a function is called, it pushed to the top of the stack
// whenever a function returns, it is popped off the stack
// js will focus on whatever at the top of the call stack



function createCounter(){

  let count = 0;

  return function() {
    count++;
    return count;
  }

}

// console.log(createCounter);// [Function: createCounter]
// console.log(createCounter());// [Function (anonymous)]

let counter1 = createCounter();
// console.log("counter1:", counter1);// [Function (anonymous)]

console.log(counter1());// 1
console.log(counter1());// 2
console.log(counter1());// 3

// console.log('======')

// let counter2 = createCounter();
// console.log(counter2());// 1
// console.log(counter2());// 2
// console.log(counter2());// 3
