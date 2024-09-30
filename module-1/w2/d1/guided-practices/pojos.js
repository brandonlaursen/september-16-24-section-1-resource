



// let obj = <reference1>
// let obj = {};


// n
// let arr = [1,2,3]
// console.log(arr[1]);//


// let arr = ['brandon', 'laursen', 29];

// key: 'value',
let person = {
  firstName: 'brandon',
  age: 29,
  location: {
    city: "Tampa",
    state: "Florida",
  },
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  sayHello: function(name) {
    return 'hello ' + name;
  }
};


// console.log(person);

// console.log(person.firstName);// brandon
// console.log(person.age);// 29
// console.log(person.location);// { city: 'Tampa', state: 'Florida' }
// console.log(person.location.city);// Tampa


// console.log(person['firstName']);// brandon
// console.log(person['age']);// 29
// console.log(person['location']);// { city: 'Tampa', state: 'Florida' }

// console.log(person.location['city']);// Tampa
// console.log(person['location']['city']);// Tampa
// console.log(person['location'].city);// Tampa


// console.log(person.sayHello);// [Function: sayHello]
// console.log(person.sayHello());// hello undefined
// console.log(person.sayHello('maica'));// hello maica

// console.log(person['sayHello']('maica'));//


// let numbers = [1, 2, 3];
// numbers.push(4);
// numbers["push"](5);
// console.log(numbers); // [1,2,3,4];




// console.log(cat1);
// console.log(cat1.name)
// console.log(cat1['name'])

// console.log(cat1.1key);
// console.log(cat.is cute);

// console.log(cat1['1key']);
// console.log(cat1['is cute']);


let variable = 'variable';

// console.log(cat1['variable']);//'whats up'
// console.log(cat1.variable);//'whats up'
// console.log(cat1.name);

// console.log(cat1['variable']);


// console.log(cat1[variable]);

let cat1 = {
  name: "pumpkin",
  age: 3,
  color: "orange",
  "1key": null,
  "is cute": true,
  variable:'whats up'
};



function myFunc(key) {

  console.log(cat1[key]);

}



// myFunc('name')
// myFunc('age');
