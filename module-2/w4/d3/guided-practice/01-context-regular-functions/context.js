function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

// const obj = {};
// console.log(obj.name);// undefined

// const ele = undefined;
// console.log(ele.name);

/********************************* Scenario 1 *********************************/
eat(); // context is the global object


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // context is nemo


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // context is the global object
// console.log(nemo)

/********************************* Scenario 4 *********************************/
// nemo.swim(); // context is nemo


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); //  classes are by default in strict mode, when we try to key into the name property, we are keying into undefined
// strict disables accessing the global object
// undefined.name; 
