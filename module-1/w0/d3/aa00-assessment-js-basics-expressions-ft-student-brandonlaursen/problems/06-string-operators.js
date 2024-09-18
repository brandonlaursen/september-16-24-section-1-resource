/*
String Operators: Use what you have learned about string operators to complete
the steps below.

Implement the following steps so that all test specs pass when you run the
following command in your terminal:
npm test test/06-string-operators-spec.js
*/

// 1. Define a variable called str1Length and set it to the length of str1. (Do
//    not hardcode the length; derive it from str1.)
let str1 = "Hello World!";
// Your code here
let str1Length = str1.length;


// 2. Define a variable called lastIndexStr2 and set it to the index of the last
//    character of str2. Note that you do NOT want the character **at** the
//    index but the index itself. (Do not hardcode the index; derive it from
//    str2.)
let str2 = "App"; // last index is 2
// if str2 is "Academy", then the last index should be 6
// Your code here
// "App"[2];
let lastIndexStr2 = str2.length - 1
// console.log("lastIndexStr2:", lastIndexStr2);


// 3. Define a variable called firstCharStr3 and set it to the first character
//    of str3. (Do not hardcode the character; derive it from str3.)
let str3 = "Hello World!"; // first character is 'H'
// Your code here
let firstCharStr3 = str3[0];
// console.log("firstCharStr3:", firstCharStr3);


// 4. Define a variable called lastCharStr4 and set it to the last character
//    of str4. (Do not hardcode the character; derive it from str4.)
let str4 = "App"; // last character is 'p'
// Your code here

let lastCharStr4 = str4[str4.length - 1];

// 5. Define a variable called indexOfP and set it to the index of the first
//    character 'p' in str5 (or -1 if str5 has no 'p's). (Do not hardcode the
//    index; derive it from str5.)
let str5 = "App"; // first index of 'p' is 1
// Your code here
let indexOfP = str5.indexOf('p');
// console.log("indexOfP:", indexOfP);


// 6. Define a variable called fifthCharStr6 and set it to the fifth character
//    of str6. (Do not hardcode the character; derive it from str6.)
let str6 = "Hello World!"; // fifth character is 'o'
let fifthCharStr6 = str6[4];


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {
  str1,
  str2,
  str3,
  str4,
  str5,
  str6,
};
try {
  exportObj.str1Length = str1Length;
} catch {}
try {
  exportObj.lastIndexStr2 = lastIndexStr2;
} catch {}
try {
  exportObj.firstCharStr3 = firstCharStr3;
} catch {}
try {
  exportObj.lastCharStr4 = lastCharStr4;
} catch {}
try {
  exportObj.indexOfP = indexOfP;
} catch {}
try {
  exportObj.fifthCharStr6 = fifthCharStr6;
} catch {}

module.exports = exportObj;
