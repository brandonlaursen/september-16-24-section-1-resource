




class Car {
  constructor(name, make, model) {
    this.name = name;
    this.make = make;
    this.model = model;

    Car.numCars += 1;
  }

  // instance method
  // this refers to whatever is to the left of the .
  // whatever instance is calling the method
  getInfo() {
    return `${this.name} ${this.make} ${this.model}`;
  }

  // static method
  static getCars(...cars){
    return cars.map((car) => car.name);
  }

  // static variable
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
console.log(Car.name);// Car
// console.log(Car.make);


// console.log(Car.getCars(challenger, mustang));
// console.log(Car.numCars);
