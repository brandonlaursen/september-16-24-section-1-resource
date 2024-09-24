// const chai = require("chai");
// const expect = chai.expect;
// const fns = require("../problems/03-most-expensive-groceries");

// describe("costOfGroceries", function() {
//   const costOfGroceries = fns.costOfGroceries;

//   it("costOfGroceries(['cheese', 'butter', 'eggs']) returns 8", function () {
//     expect(costOfGroceries(['cheese', 'butter', 'eggs'])).to.eq(8);
//   });
//   it("costOfGroceries(['eggs', 'milk', 'bread', 'bread']) returns 13", function () {
//     expect(costOfGroceries(['eggs', 'milk', 'bread', 'bread'])).to.eq(13);
//   });
//   it("costOfGroceries(['cheese', 'bread']) returns 9", function () {
//     expect(costOfGroceries(['cheese', 'bread'])).to.eq(9);
//   });
//   it("costOfGroceries(['eggs', 'butter']) returns 3", function () {
//     expect(costOfGroceries(['eggs', 'butter'])).to.eq(3);
//   });
// });

// describe("mostExpensiveGroceries - uses the costOfGroceries function", function() {

//   it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']]) returns 1", function () {
//     expect(
//       fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']])
//     ).to.eq(1);
//     const mostExpensiveGroceries = formatFile((arr) => {
//       return arr[1] === 'bread' ? 10 : 0;
//     });
//     expect(
//       mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']]),
//       "mostExpensiveGroceries must use the costOfGroceries function"
//     ).to.eq(2);
//   });
//   it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']]) returns 0", function () {
//     expect(
//       fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']])
//     ).to.eq(0);
//     const mostExpensiveGroceries = formatFile((arr) => {
//       return arr[0] === 'eggs' ? 10 : 0;
//     });
//     expect(
//       mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']]),
//       "mostExpensiveGroceries must use the costOfGroceries function"
//     ).to.eq(1);
//   });
//   it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']]) returns 2", function () {
//     expect(
//       fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']])
//     ).to.eq(2);
//     const mostExpensiveGroceries = formatFile((arr) => {
//       return arr[0] === 'eggs' ? 10 : 0;
//     });
//     expect(
//       mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']]),
//       "mostExpensiveGroceries must use the costOfGroceries function"
//     ).to.eq(1);
//   });
// });

// function formatFile (cb) {
//   const fs = require('fs');
//   const path = require('path');
//   const args = [
//     /(function\s+costOfGroceries\()|((?<=\n\s*)(const|let|var)?\s*costOfGroceries\s*=\s*function\s*\()|((?<=\n\s*)(const|let|var)?\s*costOfGroceries\s*=\s*\((?=.*=>))/g,
//     "exports.costOfGroceries = function (",
//     /=>/g,
//     "",
//     /(?<!function\s*)costOfGroceries\s*\(/g,
//     "exports.costOfGroceries(",
//     "module.exports = {\n  costOfGroceries,\n",
//     "module.exports = {\n",
//   ]

//   // console.log('==>',args)
//   if (!args.length) return require("../problems/03-most-expensive-groceries");
//   let file = fs.readFileSync(
//     path.resolve(__dirname, "../problems/03-most-expensive-groceries.js"),
//     "utf-8"
//   );
//   let i = 0;
//   // console.log('/n=========================== ==>',file)
//   while (i < args.length) {
//     let [regex, replaceStr] = [args[i], args[i + 1]];
//     file = file.replace(
//       regex,
//       replaceStr
//     );
//     i += 2;
//   }

//   // file += "exports.costOfGroceries = " + cb.toString();
//   let test = cb.toString()

//   file += "exports.costOfGroceries = " + test;
//   console.log('=======>',file)

//   const Module = module.constructor;
//   // console.log('asdfsdf', module)
//   const m = new Module();
//   m._compile(file, "");
//   // console.log('===>', m)
//   const obj = m.exports;
//   return obj.mostExpensiveGroceries;
// };



const chai = require("chai");
const expect = chai.expect;
const fns = require("../problems/03-most-expensive-groceries");

describe("costOfGroceries", function() {
  const costOfGroceries = fns.costOfGroceries;

  it("costOfGroceries(['cheese', 'butter', 'eggs']) returns 8", function () {
    expect(costOfGroceries(['cheese', 'butter', 'eggs'])).to.eq(8);
  });
  it("costOfGroceries(['eggs', 'milk', 'bread', 'bread']) returns 13", function () {
    expect(costOfGroceries(['eggs', 'milk', 'bread', 'bread'])).to.eq(13);
  });
  it("costOfGroceries(['cheese', 'bread']) returns 9", function () {
    expect(costOfGroceries(['cheese', 'bread'])).to.eq(9);
  });
  it("costOfGroceries(['eggs', 'butter']) returns 3", function () {
    expect(costOfGroceries(['eggs', 'butter'])).to.eq(3);
  });
});

describe("mostExpensiveGroceries - uses the costOfGroceries function", function() {
  // console.log('entering describe block')
  it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']]) returns 1", function () {
    // console.log('inside it', fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']]))
    expect(
      fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']])
    ).to.eq(1);


    console.log('LOOK HERE!!!!!')
    const mostExpensiveGroceries = formatFile((arr) => {
      console.log('========INSIDE=========', arr)
      return arr[1] === 'bread' ? 10 : 0;
    });
    // console.log('=========AFTER=========')
    // console.log('wow', mostExpensiveGroceries)



    expect(
      mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']]),
      "mostExpensiveGroceries must use the costOfGroceries function"
    ).to.eq(2);
  });
  it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']]) returns 0", function () {
    expect(
      fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']])
    ).to.eq(0);
    const mostExpensiveGroceries = formatFile((arr) => {
      return arr[0] === 'eggs' ? 10 : 0;
    });
    expect(
      mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']]),
      "mostExpensiveGroceries must use the costOfGroceries function"
    ).to.eq(1);
  });
  it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']]) returns 2", function () {
    expect(
      fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']])
    ).to.eq(2);
    const mostExpensiveGroceries = formatFile((arr) => {
      return arr[0] === 'eggs' ? 10 : 0;
    });
    expect(
      mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']]),
      "mostExpensiveGroceries must use the costOfGroceries function"
    ).to.eq(1);
  });
});

function formatFile (cb) {
  console.log('INSIDE FORMAT FILE', cb)
  const fs = require('fs');
  const path = require('path');
  const args = [
    /(function\s+costOfGroceries\s*\()|((?<=\n\s*)(const|let|var)?\s*costOfGroceries\s*=\s*function\s*\()|((?<=\n\s*)(const|let|var)?\s*costOfGroceries\s*=\s*\((?=.*=>))/g,
    "exports.costOfGroceries = function (",
    /=>/g,
    "",
    /(?<!function\s*)costOfGroceries\s*\(/g,
    "exports.costOfGroceries(",
    "module.exports = {\n  costOfGroceries,\n",
    "module.exports = {\n",
  ]



  if (!args.length) return require("../problems/03-most-expensive-groceries");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/03-most-expensive-groceries.js"),
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

  // file += "exports.costOfGroceries = " + cb.toString();
  let test = cb.toString()
  // console.log('=====test======',test)
  file += "exports.costOfGroceries = " + test;
  // console.log('===FILE====', file)

  // console.log('=======>',file)
  const Module = module.constructor;

  const m = new Module();
  // console.log('===========')
  // console.log('====>',m)
  // console.log('=====before======', file)
  m._compile(file, "");
  // console.log('=====after======', m)
  const obj = m.exports;

  // console.log('**************',obj.mostExpensiveGroceries)
  return obj.mostExpensiveGroceries;
};
