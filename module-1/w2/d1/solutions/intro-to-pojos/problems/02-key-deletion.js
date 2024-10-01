/*
Given the object below, delete the key-value pair such that "{}" is printed
when printing the object.
*/

const obj = {
  first: "1"
}
/******************** DO NOT MODIFY ANY CODE ABOVE THIS LINE *****************/

//!!START
delete obj['first'];
//!!END

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

console.log(obj); //=> {}

module.exports = obj;
