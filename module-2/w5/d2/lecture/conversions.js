// Base 10 - Decimal
// * 10 Options: 0 - 9
// Base 2  - Binary
// * 2 Options: 0 & 1
// Base 16 - Hexadecimal
// * 16 Options: 0 - 9, A,B,C,D,E,F

// 0b 0101 0101
// * Binary digit is a bit
// 1 or 0
// * 4 bits is a nibble
// 0101
// * 8 bits is a byte
// 0101 0101

// Kilobyte - thousand
// * 8000 bits
// 0 or 1
// * 4000 nibbles
// 0101
// * 1000 bytes
// 0010 0101

// Gigabyte - billion
// * 8 billion bits
// 0 or 1
// * 4 billion nibbles
// 0101
// * 1 billion bytes
// 0010 0101

// Base 10 - Decimal
/*


  - 4 7 2 9



  Index  -     3       2     1      0
  base^i -     10^3   10^2   10^1    10^0
              1000     100    10      1
  Value  -    4        7      2       9

    base^i * value = 4000 + 700 + 20 + 9

    4729




  Base 2 - Binary

  Base2 -> Base10
  0b11001010  ->  Base 10

  Index -  7    6     5     4    3     2     1    0
  base^i   2^7  2^6   2^5   2^4  2^3   2^2   2^1  2^0
          128   64     32    16   8     4     2   1
  value -  1    1     0      0     1    0     1   0

  base^i * value

    128 + 64 + 8 + 2  = 202


  base10 -> base2
  number / base -> track the remainder

  202 / 2 = 101 -> r0
  101 / 2 = 50  -> r1
  50 / 2  = 25  -> r0
  25 / 2  = 12  -> r1
  12 / 2  =  6  -> r0
  6 /  2  =  3  -> r0
  3 / 2   =  1  -> r1
  1 / 2   =  1  -> r1 <- left most value

  0b11001010


*/

const binary = `0b11001010`;

function binaryToDecimal(binaryStr) {
  binaryStr = binaryStr.substring(2); //11001010
  // console.log("binaryStr:", binaryStr);

  binaryStr = binaryStr.split("").reverse().join("");
  // console.log("binaryStr:", binaryStr);//  01010011

  let sum = 0;
  for (let i = 0; i < binaryStr.length; i++) {
    // console.log(typeof binaryStr[i], binaryStr[i], parseInt(binaryStr[i]), Math.pow(2, i) );
    let num = Math.pow(2, i) * parseInt(binaryStr[i]);
    // console.log(num);

    sum += num;
    // console.log(sum, num);
  }

  return sum;
}


// binary to decimal
// console.log(binaryToDecimal(binary));

// parseInt(string, base)
console.log(parseInt(11001010, 2));// 202


let decimal = parseInt(11001010, 2);

// decimal to binary
console.log(decimal.toString(2));// 11001010
