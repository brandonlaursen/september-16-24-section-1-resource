require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("05 - Undefined and Null", () => {
  describe("1. declaredVar", () => {
    it("should have a value of undefined", () => {
      const obj = formatFile();
      if (!("declaredVar" in obj))
        throw new ReferenceError("declaredVar is not defined");
      expect(obj.declaredVar).to.be.undefined;
    });
    it("should not be defined (should not be set to a value)", () => {
      const obj = formatFile();
      if (!("declaredVar" in obj))
        throw new ReferenceError("declaredVar is not defined");
      const file = fs.readFileSync(
        path.resolve(__dirname, "../problems/05-undefined-null.js"),
        "utf-8"
      );
      expect(file, "declaredVar should not be set to a value").to.not.match(
        /\n(?!(?:(?:\s+exportObj)|(?:.*\/\/))).*declaredVar.*=/
      );
    });
  });

  describe("2. definedVar", () => {
    it("should have a value of 'This is a defined variable'", () => {
      const obj = formatFile();
      if (!("definedVar" in obj))
        throw new ReferenceError("definedVar is not defined");
      expect(obj.definedVar).to.eq("This is a defined variable");
    });
  });

  describe("3. nullVar", () => {
    it("should have a value of null", () => {
      const obj = formatFile();
      if (!("nullVar" in obj))
        throw new ReferenceError("nullVar is not defined");
      expect(obj.nullVar).to.be.null;
    });
  });

  describe("4. isNull", () => {
    it("should evaluate to true if unknownVar1 is null", () => {
      const obj = formatFile("unknownVar1", null);
      if (!("unknownVar1" in obj))
        throw new ReferenceError("unknownVar1 is not defined");
      if (!("isNull" in obj)) throw new ReferenceError("isNull is not defined");
      expect(obj.isNull).to.be.true;
    });
    it("should evaluate to false if unknownVar1 is not null", () => {
      const obj = formatFile("unknownVar1", undefined);
      if (!("unknownVar1" in obj))
        throw new ReferenceError("unknownVar1 is not defined");
      if (!("isNull" in obj)) throw new ReferenceError("isNull is not defined");
      expect(obj.isNull).to.be.false;
    });
  });

  describe("5. isUndefined", () => {
    it("should evaluate to true if unknownVar2 is undefined", () => {
      const obj = formatFile("unknownVar2", undefined);
      if (!("unknownVar2" in obj))
        throw new ReferenceError("unknownVar2 is not defined");
      if (!("isUndefined" in obj))
        throw new ReferenceError("isUndefined is not defined");
      expect(obj.isUndefined).to.be.true;
    });
    it("should evaluate to false if unknownVar2 is not undefined", () => {
      const obj = formatFile("unknownVar2", null);
      if (!("unknownVar2" in obj))
        throw new ReferenceError("unknownVar2 is not defined");
      if (!("isUndefined" in obj))
        throw new ReferenceError("isUndefined is not defined");
      expect(obj.isUndefined).to.be.false;
    });
  });

  describe("Test spec for more advanced JavaScript users only:", function () {
    it("use comparison expressions only, cannot use conditionals with if", function () {
      const file = fs.readFileSync(
        path.resolve(__dirname, "../problems/04-comparisons.js"),
        "utf-8"
      );
      expect(
        file,
        "Use comparison expressions only, cannot use conditionals with if"
      ).to.not.match(/(?<!\/\/\s*|\/\*\s*[^(\*\/)])if\s*\(.*\)/);
    });
  });
});

const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/05-undefined-null");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/05-undefined-null.js"),
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
