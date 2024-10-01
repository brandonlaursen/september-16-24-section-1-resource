/*

  Destructuring
  * Allows us to move and and access values within an array or object
  * We can use destructuring behavior to extract elements of an array or object

*/

let array = [1, true, "hello"];

// let number = array[0];
// let bool = array[1];
// let string = array[2];



let [ number, bool, num, ...rest  ] = array;

// console.log(number,  rest);
// let [ number, bool, string  ] = [1, true, "hello"];
// console.log(number, bool, string);


// function myFunc() {
//   let [number, , string] = array;
//   console.log(number, string);
// }


let lastName = 'brandon';
let firstName = 'laursen';

// let temp = lastName;// 'laursen';
// lastName = firstName;// 'brandon';
// firstName = temp;

// console.log(firstName, lastName);// brandon laursen


// [lastName, firstName ] = [firstName, lastName];
// console.log(firstName, lastName);// brandon laursen


// let numbers = [1,3,2];

// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers);// [ 1, 2, 3 ]



// let entries = Object.entries(obj)
// console.log("entries:", entries);

// // let [ number, bool, string  ] = array;
// for(let [key, value] of entries) {
//   // console.log(ele);
//   // let [key, value] = ele;
//   // console.log(key, value);
// }


let obj = {
  name:'brandon',
  age: 29,
  address: {
    location: 'tampa'
  }
};




// let name = obj.name;
// let age = obj.age;

// let { name, age} = obj;

// spread is to the right of the equal
// rest is to the left of the equal

function myFunc(name, ...restOfObj) {

}

let newObj = {...obj, name: 'luke'};
// console.log(newObj);// { name: 'luke', age: 29, address: { location: 'tampa' } }

// let { name, ...restOfObj } = obj;

let { name, ...restOfObj } = {...obj, age: 50, favColor: 'red'};

// console.log(restOfObj)
// console.log(name);
// console.log(restOfObj);// { age: 50, address: { location: 'tampa' }, favColor: 'red' }


// console.log(obj);
// console.log(restOfObj);// { age: 29, address: { location: 'tampa' } }


// let { name } = obj;
// let { name } = {...obj, name: 'luke'};


// let { name } = {...obj, name};
// console.log(name);

// obj.age = 30;
// let { name: newName, age, address: { location }  } = obj;


// let {age: yearsOld } = obj;
// console.log("yearsOld:", yearsOld);
// console.log(name);// brandon
// console.log(age);// 29
// console.log(address);// { location: 'tampa' }
// console.log(location);// tampa

// console.log(newName);


function myFunc({ name } ) {

  console.log(name);//
  // let name = obj.name;
  // let { name } = obj;
  // console.log(name)
 }

// console.log(myFunc({name:'brandon'}))
