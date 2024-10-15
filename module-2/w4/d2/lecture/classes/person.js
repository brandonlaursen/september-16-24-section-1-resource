


// class Person{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
// }


// const person1 = new Person('brandon', 20);
// console.log("person1:", person1);


// class Person{
//   constructor(name, age = 20){
//     this.name = name;
//     this.age = age;
//   }
// }


// const person1 = new Person('brandon', 40);
// console.log("person1:", person1);



class Person{
  constructor(name){
    this.name = name;
    this.age = 100;
  }
  static age = 50;
}

console.log(Person);
const person1 = new Person('brandon', 2000);
person1.age = 100000000
// console.log(person1);

Person.age = 200000;
console.log(Person)


// console.log("person1:", person1);

const person2 = new Person('maica');
console.log("person2:", person2);
