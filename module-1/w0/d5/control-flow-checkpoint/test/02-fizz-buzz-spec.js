require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
let fizzBuzz;
try {
 fizzBuzz = require("../problems/02-fizz-buzz");
} catch {}

describe("02 - fizzBuzz", () => {
  describe("if its argument is divisible by 3, but not by 5, then it should return 'Fizz'", () => {
    it("fizzBuzz(3) should return 'Fizz'", () => {
      expect(fizzBuzz(3)).to.eq("Fizz");
    });
    it("fizzBuzz(6) should return 'Fizz'", () => {
      expect(fizzBuzz(6)).to.eq("Fizz");
    });
    it("fizzBuzz(87) should return 'Fizz'", () => {
      expect(fizzBuzz(87)).to.eq("Fizz");
    });
  });

  describe("if its argument is divisible by 5, but not by 3, then it should return 'Buzz'", () => {
    it("fizzBuzz(5) should return 'Buzz'", () => {
      expect(fizzBuzz(5)).to.eq("Buzz");
    });
    it("fizzBuzz(10) should return 'Buzz'", () => {
      expect(fizzBuzz(10)).to.eq("Buzz");
    });
    it("fizzBuzz(65) should return 'Buzz'", () => {
      expect(fizzBuzz(65)).to.eq("Buzz");
    });
  });

  describe("if its argument is divisible by 3 and by 5, then it should return 'Fizzbuzz'", () => {
    it("fizzBuzz(15) should return 'Fizzbuzz'", () => {
      expect(fizzBuzz(15)).to.eq("Fizzbuzz");
    });
    it("fizzBuzz(45) should return 'Fizzbuzz'", () => {
      expect(fizzBuzz(45)).to.eq("Fizzbuzz");
    });
    it("fizzBuzz(135) should return 'Fizzbuzz'", () => {
      expect(fizzBuzz(135)).to.eq("Fizzbuzz");
    });
  });
});
