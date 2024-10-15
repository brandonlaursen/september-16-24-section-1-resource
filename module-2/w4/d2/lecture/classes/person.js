


class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}


const person1 = new Person('brandon', 20);
// console.log("person1:", person1);


class Person{
  constructor(name, age = 20){
    this.name = name;
    this.age = age;
  }
}


// const person1 = new Person('brandon', 40);
console.log("person1:", person1);



class Person{
  constructor(name){
    this.name = name;
    this.age = 100;
  }
}


// const person1 = new Person('brandon', 2000);
console.log("person1:", person1);

const person2 = new Person('maica');
// console.log("person2:", person2);
