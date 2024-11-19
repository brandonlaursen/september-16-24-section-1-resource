/*

  How do we reference the DOM
  * getElementById('two')
  * getElementByClassName
  * getElementsByName

  * querySelector('#two')
  * querySelector('.odd')


  querySelector('#wrapper > ')

  * querySelectorAll

*/
const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  const seeded = document.getElementsByClassName("seed");
  // console.log(seeded);

  // 2. Get all seedless fruit elements
  const seedless = document.getElementsByClassName("seedless");
  // console.log("seedless:", seedless);

  // 3. Get first seedless fruit element
  const firstSeedless = document.querySelectorAll(".seedless")[0];
  // console.log("firstSeedless:", firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  const you = document.querySelector("#wrapper p span");
  // console.log("you:", you);

  // 5. Get all children of element "wrapper"
  const wrapper = document.querySelector("#wrapper");
  // console.log("wrapper:", wrapper);
  const children = wrapper.children;
  // console.log("children:", children);

  // 6. Get all odd number list items in the list
  const odds = document.getElementsByClassName("odd");
  console.log("odds:", odds);

  // 7. Get all even number list items in the list
  const even = document.querySelectorAll("ol > li:not(.odd)");
  console.log("even:", even);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  const techCompanies = document.querySelectorAll("#three a[href]");

  //   console.log("techCompanies:", techCompanies);
  const google = techCompanies[0];
  console.log(google);

  document.querySelectorAll("#three p a:not([class])");
  //   ("#three p a:not(.))")

  // 9. Get "Amazon" list element
  const amazon = document.getElementsByClassName("shopping")[0];
  console.log("amazon:", amazon);

  // 10. Get all unicorn list elements (not the image element)
  const unicorn = document.querySelectorAll(
    "ul > li:not(.seed):not(.seedless)"
  );

  document.querySelectorAll("li:has(img.unicorn)")
  console.log("unicorn:", unicorn);
};

window.onload = select;
