require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("03 - Numbers", () => {
  context("when num1 = 10, num2 = 3, and num3 = 0", () => {
    let numbers;
    before(() => {
      numbers = formatFile("num1", 10, "num2", 3, "num3", 0);
    });

    describe("num1", () => {
      it("num1 should evaluate to the correct number after all the steps", () => {
        if (!("num1" in numbers))
          throw new ReferenceError("num1 is not defined");
        expect(btoa(numbers.num1) === "Mg==", "num1 is not the correct value")
          .to.be.true;
      });
      it("predictNum1 should evaluate to the correct number for num1", () => {
        if (!("predictNum1" in numbers))
          throw new ReferenceError("predictNum1 is not defined");
        const file = fs
          .readFileSync(
            path.resolve(__dirname, "../problems/03-numbers.js"),
            "utf-8"
          )
          .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");
        expect(
          file,
          "Nice try! But you cannot set predictNum1 to num1"
        ).to.not.match(/(?<!\/\*[^(\*\/)])predictNum1\s*=\s*num1/);
        expect(
          btoa(numbers.predictNum1) === "Mg==",
          "predictNum1 is not the correct value"
        ).to.be.true;
      });
    });

    describe("num2", () => {
      it("num2 should evaluate to the correct number after all the steps", () => {
        if (!("num2" in numbers))
          throw new ReferenceError("num2 is not defined");
        expect(btoa(numbers.num2) === "MA==", "num2 is not the correct value")
          .to.be.true;
      });
      it("predictNum2 should evaluate to the correct number for num2", () => {
        if (!("predictNum2" in numbers))
          throw new ReferenceError("predictNum2 is not defined");
        expect(
          btoa(numbers.predictNum2) === "MA==",
          "predictNum2 is not the correct value"
        ).to.be.true;
      });
    });

    describe("num3", () => {
      it("num3 should evaluate to the correct number after all the steps", () => {
        if (!("num3" in numbers))
          throw new ReferenceError("num3 is not defined");
        expect(btoa(numbers.num3) === "MjY=", "num3 is not the correct value")
          .to.be.true;
      });
      it("predictNum3 should evaluate to the correct number for num3", () => {
        if (!("predictNum3" in numbers))
          throw new ReferenceError("predictNum3 is not defined");
        expect(
          btoa(numbers.predictNum3) === "MjY=",
          "predictNum3 is not the correct value"
        ).to.be.true;
      });
    });
  });

  context("when num1 = 8, num2 = 4, and num3 = 32", () => {
    let numbers;
    before(() => {
      numbers = formatFile("num1", 8, "num2", 4, "num3", 32);
    });

    describe("num1", () => {
      it("num1 should evaluate to the correct number after all the steps", () => {
        if (!("num1" in numbers))
          throw new ReferenceError("num1 is not defined");
        expect(btoa(numbers.num1) === "MQ==", "num1 is not the correct value")
          .to.be.true;
      });
    });

    describe("num2", () => {
      it("num2 should evaluate to the correct number after all the steps", () => {
        if (!("num2" in numbers))
          throw new ReferenceError("num2 is not defined");
        expect(btoa(numbers.num2) === "Mg==", "num2 is not the correct value")
          .to.be.true;
      });
    });

    describe("num3", () => {
      it("num3 should evaluate to the correct number after all the steps", () => {
        if (!("num3" in numbers))
          throw new ReferenceError("num3 is not defined");
        expect(btoa(numbers.num3) === "MjE=", "num3 is not the correct value")
          .to.be.true;
      });
    });
  });
});


const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/03-numbers");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/03-numbers.js"),
    "utf-8"
  );
  let i = 0;
  while (i < args.length) {
    let [name, value] = [args[i], args[i + 1]];
    if (typeof value === "string") value = `"${value}"`;
    file = file.replace(
      new RegExp(`let ${name}.*`),
      `let ${name} = ${value};`
    );
    i += 2;
  }
  const Module = module.constructor;
  const m = new Module();
  m._compile(file, "");
  return m.exports;
};
