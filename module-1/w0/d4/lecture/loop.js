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

myFunc();
