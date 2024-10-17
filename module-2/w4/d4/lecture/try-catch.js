






// const first = new Error('I am error');
// console.log("first:", first);



// const second = Error('I am error');
// console.log("second:", second);




function giveMeNumber(num) {

  if(typeof num !== 'number') {
    throw new Error('THATS NAN');
  } else {
    return 'Thats a number!'
  }
}
// console.log(giveMeNumber('string'));

try {
  // console.log(giveMeNumber(20))
  // console.log(giveMeNumber('string'));
} catch(err) {
  // console.log(err);
  console.log(err.name);
  console.log(err.message);
}



function wrongReferece(arg) {
  console.log(args);
}


try {
  // wrongReferece();
} catch(e) {
  // console.log('==>',e)
  if(e instanceof ReferenceError) {
    console.log(e.message)
  }
}


function reverseString(string) {
  return string.split('').reverse().join('');
}


try {
  // reverseString(12);
  // console.log(reverseString('hello'))
} catch(e) {
  console.log(e)
} finally {
  console.log('this will always run')
}




const array = [1,2,3, 'string']
// const array = 12

try {
  for(let i = 0; i < array.length; i++){
    // console.log(array[i]);
    if(typeof array[i] === 'string') {
      throw Error('this is a string')
    }
  }
} catch(e) {
  console.log(e);
}
