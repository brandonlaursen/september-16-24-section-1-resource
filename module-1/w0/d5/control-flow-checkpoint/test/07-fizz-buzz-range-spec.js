require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let fizzBuzzRange;
try {
  fizzBuzzRange = require("../problems/07-fizz-buzz-range");
} catch {}

describe("07 - fizzBuzzRange", () => {
  it("fizzBuzzRange(8, 15) should return '8, Fizz, Buzz, 11, Fizz, 13, 14, Fizzbuzz'", () => {
    expect(fizzBuzzRange(8, 15)).to.eq(
      "8, Fizz, Buzz, 11, Fizz, 13, 14, Fizzbuzz"
    );
  });
  
  it("fizzBuzzRange(20, 25) should return 'Buzz, Fizz, 22, 23, Fizz, Buzz'", () => {
    expect(fizzBuzzRange(20, 25)).to.eq("Buzz, Fizz, 22, 23, Fizz, Buzz");
  });
  
  it("fizzBuzzRange(41, 47) should return '41, Fizz, 43, 44, Fizzbuzz, 46, 47'", () => {
    expect(fizzBuzzRange(41, 47)).to.eq("41, Fizz, 43, 44, Fizzbuzz, 46, 47");
  });
});
