/*
Undefined and Null: Use what you have learned about undefined and null to
complete the steps below.

Implement the following steps so that all test specs pass when you run the
following command in your terminal:
npm test test/05-undefined-null-spec.js
*/

// 1. Declare a variable called declaredVar but don't define a value for it
// Your code here

let declaredVar;


// 2. Define a variable called definedVar that has a string value of
//    'This is a defined variable'
let definedVar = 'This is a defined variable';



// 3. Define a variable called nullVar that has a value of null
// Your code here
let nullVar = null;


// 4. Define a variable called isNull that evaluates to true if unknownVar1 is
//    a null value
let unknownVar1 = null;
let isNull = unknownVar1 === null;



// 5. Define a variable called isUndefined that evaluates to true if unknownVar2
//    is undefined
let unknownVar2;
let isUndefined = unknownVar2 === undefined;


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {
  unknownVar1,
  unknownVar2,
};
try {
  exportObj.declaredVar = declaredVar;
} catch {}
try {
  exportObj.definedVar = definedVar;
} catch {}
try {
  exportObj.nullVar = nullVar;
} catch {}
try {
  exportObj.isNull = isNull;
} catch {}
try {
  exportObj.isUndefined = isUndefined;
} catch {}

module.exports = exportObj;
