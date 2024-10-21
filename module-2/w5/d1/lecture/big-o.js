







//O(1)
function add(num1, num2) {

  // 1
  return num1 + num2;
}


//O(1)
function constant() {

  // 1 + 100 + 100 = 1
  for(let i = 0; i < 100; i++){
    // 100
    console.log(i);
  }
}

// constant();



//O(n)
function linear(n) {


  // 1 + n + n
  // 1 + 2n
  for(let i = 0; i < n; i++){
    console.log(n);
  }


     // 1 + n + n
     // 1 + 2n
   for(let i = 0; i < n; i++){
    console.log(n);
  };

  // n
};


// linear(100);
// linear(100000000);


//(n^2)

function quadratic(n) {

  // perform n amount of operations
  // 1 + n + n
  for(let i = 0; i < n; i++){

     // perform n amount of operations
    //  1 + n + n
    for(let j = 0; j < n; j++){
      console.log(j);
    }
  }

  for(let i = 0; i < n; i++){

    // perform n amount of operations
   //  1 + n + n
   for(let j = 0; j < 100; j++){
     console.log(j);
   }
 }
}

// (1 + n + n) * (1 + n + n)
//  (1 + 2n) * (1 + 2n)
//    (n)    *  (n)
// n^2

// quadratic(100);

function cubic(n){

  // perform n amount of operations
  // 1 + n + n
  for(let i = 0; i < n; i++){

    // perform n amount of operations
   //  1 + n + n
   for(let j = 0; j < n; j++){
     console.log(j);

     // 1 + n + n
     for(let k = 0; k < n; j++){
      console.log(k);
     }
   }
 }
}

// (1 + n + n) * (1 + n + n) * (1 + n + n)
//  (1 + 2n) * (1 + 2n) * (1 + 2n)
//    (n)    *  (n)    * (n)
// n^3




// space



function spaceLinear(n) {
  let res = [];

  for(let i = 0; i < n; i++){

    res.push([i]);

  };

  console.log(res);
}

// spaceLinear(20);


function spaceQuadratic(n) {
  let res = [];

  for(let i = 0; i < n; i++){

    res.push([i]);

  };

  console.log(res);
}




//O(n) - speed complexity
//0(n) - space complexity
function linear(n) {

  if(n === 0) return;


  linear(n - 1);
};


linear(10);


//O(n) - speed complexity
//0(1) - space complexity
function linear2(n) {

  for(let i = 0; i < n; i++){
    console.log(n);
  }
};


linear2(10);






function logarithmic(n) {

  if(n === 0) return;


  logarithmic(n / 2);
};


logarithmic(10);
// 1 2 3 4 5 6 7 8 9 10
// 10 5 2 1
