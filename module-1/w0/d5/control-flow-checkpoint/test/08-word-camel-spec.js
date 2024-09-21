require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
let wordCamel;
try {
  wordCamel = require("../problems/08-word-camel");
} catch {}

describe("08 - wordCamel", () => {
  it("wordCamel('aaaaaaaaaa', 2) should return 'AaAaAaAaAa'", () => {
    expect(wordCamel("aaaaaaaaaa", 2)).to.eq("AaAaAaAaAa");
  });
  
  it("wordCamel('bbbbbbbbbbbbb', 4) should return 'BbbbBbbbBbbbB'", () => {
    expect(wordCamel("bbbbbbbbbbbbb", 4)).to.eq("BbbbBbbbBbbbB");
  });
  
  it("wordCamel('Palindrome', 3) should return 'PalIndRomE'", () => {
    expect(wordCamel("Palindrome", 3)).to.eq("PalIndRomE");
  });
});
