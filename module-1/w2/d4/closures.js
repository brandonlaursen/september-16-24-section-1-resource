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
lexicalEnv: elephantCollector:{
      elephants: ['dumbo']
      inner
    }

  lexicalEnv1: {
    elephantCollector1:{
      elephants: ['dumbo']
      inner: {
        name: 'arg1',
        elephants: ['dumbo', 'zunesha']
      }
    }
  }

  lexicalEnv2: {
    elephantCollector2:{
      elephants: ['dumbo']
      inner: {
        name: 'arg1',
        elephants: ['dumbo','funkfreed']
      }
    }
  }


*/
// eleParade1 -> <ref1>
let elephantParade1 = elephantCollector();
console.log(elephantParade1('zunesha')); // [ 'dumbo', 'zunesha' ]
console.log(elephantParade1('brandon')); // [ 'dumbo', 'zunesha' ]

// eleParade2 -> <ref1>
let elephantParade2 = elephantCollector();
console.log(elephantParade2('funkfreed'));// [ 'dumbo', 'funkfreed' ]
console.log(elephantParade2('horton'));
// console.log('==>',elephantCollector()());
