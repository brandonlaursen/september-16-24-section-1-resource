/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

function iceCreamShop(flavors, favorite) {
    // Base
    if (flavors.length === 0) return false;

    // Recursive Step
    const currentFlavor = flavors.pop();

    if (currentFlavor === favorite) return true;

    // Recursive Case
    return iceCreamShop(flavors, favorite);
}

// ? ---------------------------------------------------------------------------
// * ----- One line
// ? ---------------------------------------------------------------------------

// const iceCreamShop = (flavors, favorite) =>
//     !flavors.length
//         ? false
//         : flavors.pop() === favorite
//         ? true
//         : iceCreamShop(flavors, favorite);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = iceCreamShop;
} catch (e) {
    module.exports = null;
}
