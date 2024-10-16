"use strict";

const Employee = require('./employee');



const john = new Employee('John Wick', 'Dog Lover');

// const myFunc = john.sayName;

setTimeout(john.sayName, 2000);//


setTimeout(() => {
  john.sayName();
}, 2000);

// let sayNameBound = john.sayName.bind(john);
// setTimeout(sayNameBound, 2000);


// class Cat {
//   purr() {
//     console.log("meow");
//   }

//   purrMore() {
//     console.log(this.name);
//     // this.purr();
//   }
// }
// let cat = new Cat();

// console.log(undefined());// console.log(undefined());
// global.setTimeout(cat.purrMore, 5000);
