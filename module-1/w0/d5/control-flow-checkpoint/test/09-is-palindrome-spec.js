require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
let isPalindrome;
try {
  isPalindrome = require("../problems/09-is-palindrome");
} catch {}

describe("09 - isPalindrome", () => {
  describe("if its argument is a palindrome, then return true", () => {
    it("isPalindrome('racecar') should return true", () => {
      expect(isPalindrome("racecar")).to.be.true;
    });
    it("isPalindrome('deed') should return true", () => {
      expect(isPalindrome("deed")).to.be.true;
    });
    it("isPalindrome('hannah') should return true", () => {
      expect(isPalindrome("hannah")).to.be.true;
    });
    it("isPalindrome('tacocat') should return true", () => {
      expect(isPalindrome("tacocat")).to.be.true;
    });
  });

  describe("if its argument is not a palindrome, then return false", () => {
    it("isPalindrome('car') should return false", () => {
      expect(isPalindrome("car")).to.be.false;
    });
    it("isPalindrome('stranger') should return false", () => {
      expect(isPalindrome("stranger")).to.be.false;
    });
    it("isPalindrome('tire') should return false", () => {
      expect(isPalindrome("tire")).to.be.false;
    });
  });
});
