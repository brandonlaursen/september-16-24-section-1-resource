require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("06 - String Operators", () => {
  describe("1. str1Length", () => {
    it("should evaluate to 12 if str1 is 'Hello World!'", () => {
      const obj = formatFile("str1", "Hello World!");
      if (!("str1" in obj)) throw new ReferenceError("str1 is not defined");
      if (!("str1Length" in obj))
        throw new ReferenceError("str1Length is not defined");
      expect(obj.str1Length).to.eq(12);
    });
    it("should evaluate to 11 if str1 is 'App Academy'", () => {
      const obj = formatFile("str1", "App Academy");
      if (!("str1" in obj)) throw new ReferenceError("str1 is not defined");
      if (!("str1Length" in obj))
        throw new ReferenceError("str1Length is not defined");
      expect(obj.str1Length).to.eq(11);
    });
  });

  describe("2. lastIndexStr2", () => {
    it("should evaluate to 2 if str2 is 'App'", () => {
      const obj = formatFile("str2", "App");
      if (!("str2" in obj)) throw new ReferenceError("str2 is not defined");
      if (!("lastIndexStr2" in obj))
        throw new ReferenceError("lastIndexStr2 is not defined");
      expect(obj.lastIndexStr2).to.eq(2);
    });
    it("should evaluate to 6 if str2 is 'Academy'", () => {
      const obj = formatFile("str2", "Academy");
      if (!("str2" in obj)) throw new ReferenceError("str2 is not defined");
      if (!("lastIndexStr2" in obj))
        throw new ReferenceError("lastIndexStr2 is not defined");
      expect(obj.lastIndexStr2).to.eq(6);
    });
  });

  describe("3. firstCharStr3", () => {
    it("should evaluate to 'H' if str3 is 'Hello World!'", () => {
      const obj = formatFile("str3", "Hello World!");
      if (!("str3" in obj)) throw new ReferenceError("str3 is not defined");
      if (!("firstCharStr3" in obj))
        throw new ReferenceError("firstCharStr3 is not defined");
      expect(obj.firstCharStr3).to.eq("H");
    });
    it("should evaluate to 'A' if str3 is 'App Academy'", () => {
      const obj = formatFile("str3", "Academy");
      if (!("str3" in obj)) throw new ReferenceError("str3 is not defined");
      if (!("firstCharStr3" in obj))
        throw new ReferenceError("firstCharStr3 is not defined");
      expect(obj.firstCharStr3).to.eq("A");
    });
  });

  describe("4. lastCharStr4", () => {
    it("should evaluate to 'p' if str4 is 'App'", () => {
      const obj = formatFile("str4", "App");
      if (!("str4" in obj)) throw new ReferenceError("str4 is not defined");
      if (!("lastCharStr4" in obj))
        throw new ReferenceError("lastCharStr4 is not defined");
      expect(obj.lastCharStr4).to.eq("p");
    });
    it("should evaluate to '!' if str4 is 'Hello World!'", () => {
      const obj = formatFile("str4", "Hello World!");
      if (!("str4" in obj)) throw new ReferenceError("str4 is not defined");
      if (!("lastCharStr4" in obj))
        throw new ReferenceError("lastCharStr4 is not defined");
      expect(obj.lastCharStr4).to.eq("!");
    });
  });

  describe("5. indexOfP", () => {
    it("should evaluate to 1 if str5 is 'App'", () => {
      const obj = formatFile("str5", "App");
      if (!("str5" in obj)) throw new ReferenceError("str5 is not defined");
      if (!("indexOfP" in obj))
        throw new ReferenceError("indexOfP is not defined");
      expect(obj.indexOfP).to.eq(1);
    });
    it("should evaluate to -1 if str5 is 'Hello World!'", () => {
      const obj = formatFile("str5", "Hello World!");
      if (!("str5" in obj)) throw new ReferenceError("str5 is not defined");
      if (!("indexOfP" in obj))
        throw new ReferenceError("indexOfP is not defined");
      expect(obj.indexOfP).to.eq(-1);
    });
  });

  describe("6. fifthCharStr6", () => {
    it("should evaluate to 'o' if str6 is 'Hello World!'", () => {
      const obj = formatFile("str6", "Hello World!");
      if (!("str6" in obj)) throw new ReferenceError("str6 is not defined");
      if (!("fifthCharStr6" in obj))
        throw new ReferenceError("fifthCharStr6 is not defined");
      expect(obj.fifthCharStr6).to.eq("o");
    });
    it("should evaluate to 'A' if str6 is 'App Academy'", () => {
      const obj = formatFile("str6", "App Academy");
      if (!("str6" in obj)) throw new ReferenceError("str6 is not defined");
      if (!("fifthCharStr6" in obj))
        throw new ReferenceError("fifthCharStr6 is not defined");
      expect(obj.fifthCharStr6).to.eq("A");
    });
    it("should evaluate to undefined if str6 is 'App'", () => {
      const obj = formatFile("str6", "App");
      if (!("str6" in obj)) throw new ReferenceError("str6 is not defined");
      if (!("fifthCharStr6" in obj))
        throw new ReferenceError("fifthCharStr6 is not defined");
      expect(obj.fifthCharStr6).to.be.undefined;
    });
  });
});

const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/06-string-operators");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/06-string-operators.js"),
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
