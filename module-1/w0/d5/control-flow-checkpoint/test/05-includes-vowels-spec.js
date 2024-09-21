require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("05 - includesVowels", () => {
  context("if VOWELS are 'aeiouAEIOU'", () => {
    it("includesVowels('hello') should return true", () => {
      const includesVowels = formatFile(
        /VOWELS\s*=\s*.*/,
        "VOWELS = 'aeiouAEIOU';"
      );
      expect(includesVowels("hello")).to.be.true;
    });
    it("includesVowels('Elk') should return true", () => {
      const includesVowels = formatFile(
        /VOWELS\s*=\s*.*/,
        "VOWELS = 'aeiouAEIOU';"
      );
      expect(includesVowels("Elk")).to.be.true;
    });
    it("includesVowels('myths') should return false", () => {
      const includesVowels = formatFile(
        /VOWELS\s*=\s*.*/,
        "VOWELS = 'aeiouAEIOU';"
      );
      expect(includesVowels("myths")).to.be.false;
    });
  });
  context("if VOWELS are 'aeiouy'", () => {
    it("includesVowels('fry') should return true", () => {
      const includesVowels = formatFile(
        /VOWELS\s*=\s*.*/,
        "VOWELS = 'aeiouy';"
      );
      expect(includesVowels("fry")).to.be.true;
    });
    it("includesVowels('Elk') should return false", () => {
      const includesVowels = formatFile(
        /VOWELS\s*=\s*.*/,
        "VOWELS = 'aeiouy';"
      );
      expect(includesVowels("Elk")).to.be.false;
    });
  });
});

const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/05-includes-vowels");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/05-includes-vowels.js"),
    "utf-8"
  );
  let i = 0;
  while (i < args.length) {
    let [regex, replaceStr] = [args[i], args[i + 1]];
    file = file.replace(
      regex,
      replaceStr
    );
    i += 2;
  }
  const Module = module.constructor;
  const m = new Module();
  m._compile(file, "");
  return m.exports;
};
