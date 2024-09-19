function myFunc(num) {
  console.log(num); // 10

  // if(num >= 5) {
  //   // console.log('num is greater than 5');
  //   return 'num is greater than 5';
  // } else {
  //   // console.log('num is not greater than 5')
  //   return 'num is not greater than 5'
  // }

  // <condition> ? <if condition is true> : <if condition is false>

  return num >= 5 ? 'num is greater than 5' : 'num is not greater than 5'

  let darkMode = true;

  // className={ darkMode ? darkModeStyling : lightModeStyling};

  // if (num >= 5) {
  //   return "num is greater than 5";
  // }

  // return "num is not greater than 5";

  // console.log("will we reach here");
}

// console.log(myFunc(5));

function myFunc2(num) {
  // if (num > 10) {
  //   console.log("number is greater than 10");
  // } else if (num > 15) {
  //   console.log("number is greater than 15");
  // } else if (num < 10) {
  //   console.log("number is less than 10");
  // } else {
  //   console.log("number is 10");
  // };

  if (num > 10) return "number is greater than 10"
  else if (num > 15) return "number is greater than 15"
  else if (num < 10) return "number is less than 10"
  else return "number is 10"


  if(num > 10) console.log("number is greater than 10");

  // if(num > 15) {
  //   console.log("number is greater than 15");
  // }

  if ("") {
    console.log("this will not run");
  }
  if ("string") {
    console.log("this will run");
  }

  if ([]) {
    console.log("this will run");
  }
}

console.log(myFunc2(20));
