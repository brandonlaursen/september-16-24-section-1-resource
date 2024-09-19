function myFunc() {
  let string = "animal";

  // console.log(string[0]);// a
  // console.log(string[1]);// n
  // console.log(string[2]);// i
  // console.log(string[3]);// m
  // console.log(string[4]);// a
  // console.log(string[5]);// l
  // console.log(string.length);// 6
  // let i = 0;
  // console.log(string[i]);// a

  // Initial Expression
  let i = 0;

  // Condition for which we keep looping
  while (i < 6) {
    console.log(i);

    // can stop loop with condition
    if(i === 20) {
      return;
    }
    // Step towards completing the loop/meeting the condition
    i++;//
  }

  console.log('loop stopped')
}

// myFunc();




// Initial Expression
// Condition for which we keep looping
// Step towards completing the loop/meeting the condition

function myFunc2(word) {

   // console.log('am i entering loop')
  // for(let i = 50; i < 100; i += 5 ) {
  //   console.log(i);
  // }
  // console.log('after the loop')

  // start at 50
  // for(let i = 50; i >= 0; i -= 5 ) {
  //   console.log(i);
  // }

  //  0 1 2 3 4 5    6
  //  c a t
  // console.log(word);
  //  0 1 2 3 4 5    6
  //  a n i m a l   undefined
  // start = 0
  // stop = < 6 || <= 5
  // step = i += 1
  // console.log(animal[0]);// a
  // console.log(animal[1]);// n
  // console.log('length:', word.length);// 6

  // cat length = 3 - 1 = 2
  // c a t
  // 0 1 2
  // for(let i = 0; i <= word.length - 1; i += 1 ) {

  // 0 1 2
  // c a t
  // 3;  3 < 3
  // console.log(word[0]);// c
  // console.log(word[1]);// a
  // console.log(word[2]);// a
  for(let i = 0; i < word.length ; i += 1 ) {

    let letter = word[i];// word[2] = t

    // console.log('index:',i, "letter:  ", letter, word[i]);
  };

  // reverse word
  // c a t
  // 0 1 2
  // length = 3
  // what index do i need start at to get the last letter first?
    // word.length - 1 = 3 - 1 = 2
  // what index do i stop at to get the first letter? 0
  // how do i wanna get there from 3 -> 0
    // --
  let newStr = '';

  let start = word.length - 1
  let end = 0;
  let step = 1

  // for(let i = word.length - 1; i >= 0; i-- ){
    for(let i = start; i >= end; i -= step ){

    let letter = word[i];
    console.log('index:',i, 'letter:', letter);
    newStr += letter;
    // console.log(newStr);
    // return newStr;//  return stop the loop!
  }

  // console.log('done', newStr)
  return newStr;
};

// console.log(myFunc2('animal'))
console.log('return value:',myFunc2('cat'))


// for(let i = 0; i < 100; i++){
//   console.log(i);
// }
