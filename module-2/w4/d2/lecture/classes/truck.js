
const Car = require('./car');


// console.log(Car);

class Truck extends Car{
  constructor(name, make, mpg) {
   super(name, make)
   this.mpg = mpg;

   Truck.numTrucks += 1
   Truck.numVehicles += 1;
  }

  getInfo(){
    return `Details of truck ${this.name} ${this.make} ${this.model} `;
  };


  static numTrucks = 0;
}




// const F150 = new Truck('F150', 'FORD', '14')

// console.log(F150);
// Truck { name: 'F150', make: 'FORD', model: 'Super Duty', mpg: '14' }


// console.log(F150.getInfo());

// console.log(Truck.getCars(F150));


// console.log(Truck.numTrucks);
// console.log(Truck.numVehicles);

// function Car(){
//   function getInfo() {
//     return `Details of car ${this.name} ${this.make} ${this.model}`;
//   }
//   function Truck(){

//     // function getInfo(){
//     //   return `Details of truck ${this.name} ${this.make} ${this.model} `;
//     // };

//     getInfo();
//   }

// }
