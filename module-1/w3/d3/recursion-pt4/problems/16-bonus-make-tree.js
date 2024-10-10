/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

// const categories1 = [
//     { id: 'animals', parent: null },
//     { id: 'mammals', parent: 'animals' },
// ];
// {
//     animals: {
//         mammals: {
//         }
//     }
// }

// {}

// { mammals: {} }

// tree.animals  = last recurse

// ! ---------------------------------------------------------------------------
// * ----- New plan!
// ! ---------------------------------------------------------------------------

// Start at first categ
// See if any other categs have the same parent.
// Find all same parents and loop.
// During loop, recurse

const makeTree = (categories, parent) => {
    const tree = {};
    const sameParents = categories.filter((el) => el.parent === parent);

    sameParents.forEach((el) => {
        tree[el.id] = makeTree(categories, el.id);
    });

    return tree;
};

// const makeTree = (categories, parent) =>
//     categories.reduce((tree, cats) => {
//         categories
//             .filter((el) => el.parent === parent)
//             .forEach((el) => {
//                 tree[el.id] = makeTree(categories, el.id);
//             });
//         return tree;
//     }, {});

// const makeTree = (categories, parent) =>
//     categories.reduce((tree, cats) => {
//         categories.forEach((el) =>
//             el.parent === parent
//                 ? (tree[el.id] = makeTree(categories, el.id))
//                 : 'ayy lmao'
//         );
//         return tree;
//     }, {});

// let sameArr = ['animals'];
// let example = {
//     animals: // recurse here
// };

// sameArr = ['mammals'];
// example = {
//     mammals: // recurse here
// };

// sameArr = ['cats', 'dogs'];
// example = {
//     cats: // recurse here
//     dogs: // recurse here
// };

// //? cats
// sameArr = ['persian', 'siamese'];
// example = {
//     persian: {}, // recurse here, immediately return {}
//     siamese: {}, // recurse here, immediately return {}
// };
// //? dogs
// sameArr = ['chihuahua', 'labrador'];
// example = {
//     chihuahua: {}, // recurse here, immediately return {}
//     labrador: {}, // recurse here, immediately return {}
// };
// const categories2 = [
//     { id: 'animals', parent: null },
//     { id: 'mammals', parent: 'animals' },
//     { id: 'cats', parent: 'mammals' },
//     { id: 'dogs', parent: 'mammals' },
//     { id: 'chihuahua', parent: 'dogs' },
//     { id: 'labrador', parent: 'dogs' },
//     { id: 'persian', parent: 'cats' },
//     { id: 'siamese', parent: 'cats' },
// ];

// const animalObjects = makeTree(categories2, null);

// console.log('\n--------------------------------\n');
// console.log(animalObjects);
// console.log('\n--------------------------------\n');
// console.log(animalObjects.animals);
// console.log('\n--------------------------------\n');
// console.log(animalObjects.animals.mammals);
// console.log('\n--------------------------------\n');

// let final = {
//     animals: {
//         mammals: {
//             cats: {
//                 persian: {}, // recurse here, immediately return {}
//                 siamese: {}, // recurse here, immediately return {}
//             },
//             dogs: {
//                 chihuahua: {}, // recurse here, immediately return {}
//                 labrador: {}, // recurse here, immediately return {}
//             },
//         },
//     },
// };

// ! ---------------------------------------------------------------------------
// * ----- Old plan :(
// ! ---------------------------------------------------------------------------

// const makeTree = (categories, parent) => {
//     const tree = {};
//     // if (!categories.length && !parent) {
//     if (!categories.length) {
//         return tree;
//     }

//     const currCat = categories[0];

//     // For the dog
//     // currCat.parent === last parent

//     // console.log(currCat);
//     tree[currCat.id] = makeTree(categories.slice(1), currCat.parent);
//     // tree[currCat.id] = {}; //! { mammals: {} } //! v2 { animals: {} }

//     return tree;
// };

// const categories1 = [
//     { id: 'animals', parent: null },
//     { id: 'mammals', parent: 'animals' },
// ];

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = makeTree;

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
