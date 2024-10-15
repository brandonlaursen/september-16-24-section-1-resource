




class Car {
  constructor(name, make, model) {
    this.name = name;
    this.make = make;
    this.model = model;

    Car.numVehicles += 1;
    Car.numCars += 1
  }

  // instance method
  // this refers to whatever is to the left of the .
  // whatever instance is calling the method
  getInfo() {
    return `Details of car ${this.name} ${this.make} ${this.model}`;
  }

  // static method
  static getCars(...cars){
    return cars.map((car) => car.name);
  }

  // static variable
  static numVehicles = 0;
  static numCars = 0;

}



const challenger = new Car( 'challenger','dodge', 'hellcat');
// console.log(challenger);
// Car { name: 'challenger', make: 'dodge', model: 'hellcat' }
// console.log(challenger.name);// challenger
// console.log(challenger.getInfo());

const mustang = new Car('mustang', 'ford', 'shelby');
// console.log(mustang);
// Car { name: 'mustang', make: 'ford', model: 'shelby' }
// console.log(mustang.getInfo());


// console.log(Car.getInfo());
// console.log(Car.name);// Car
// console.log(Car.make);


// console.log(Car.getCars(challenger, mustang));
// console.log(Car.numCars);


// function objectCreator(name){
//   return {
//     name: name
//   }
// }

// objectCreator('name')

class Fruit {
  constructor(color, taste) {
    this.color = color;
    this.taste = taste;
  }
  eat() {
    console.log(`You ate a ${Fruit.name}.`);
  }
};

// const grape = new Fruit('purple', 'sweet');
// grape.eat();



class Apple extends Fruit {
  constructor() {
    super('red', 'sweet');
  }
  eat() {
    console.log(`You ate a ${this.taste} Apple!`);
  }
}
// const apple = new Apple();




class Task {
  static taskList = [];
  static printTaskList() {
    console.log(this.taskList);
  }
  static addTask(task) {
    this.taskList.push(task);
  }
  constructor(taskDetail) {
    this.taskDetail = taskDetail;
    Task.addTask(this);
  }

  getInfo() {
    console.log(this.taskDetail);
  }
};


// const laundry = new Task('laundry');
// console.log(laundry.addTask('task'));
// Task.printTaskList()
// console.log(Task.getInfo());
// Given the code above, what will Task.printTaskList() do?


module.exports = Car;
