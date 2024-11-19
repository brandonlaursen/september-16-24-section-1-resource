/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image
    // console.log(url)
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url)


        removing elements
        .remove();

        /* Add the new dog card as a child to the ul in the .gallery element */

    // * extract the breed from the url
    const breed = url.split("/")[4];

    // * create an li element
    const newLi = document.createElement("li");
    // console.log(newLi)

    // * create figure element
    const newFigure = document.createElement("figure");
    // console.log("newFigure:", newFigure);

    // * create image element
    const newImg = document.createElement("img");
    // console.log(newImg);
    newImg.src = url;
    // console.log(newImg);

    // * create figcaption
    const newFigCaption = document.createElement("figcaption");
    //     * set innerText to the breed
    newFigCaption.innerText = breed;
    // console.log("newFigCaption:", newFigCaption);

    // * append the img to the figure
    newFigure.appendChild(newImg);
    // * append the figcaption to the figure
    newFigure.appendChild(newFigCaption);
    // console.log(newFigure)

    // * append the figureEle to the li
    newLi.appendChild(newFigure);

    // * query the ul element
    const ul = document.querySelector("ul");
    // console.log(ul);

    // * append the li to the ul
    ul.appendChild(newLi);

    // ul.innerHTML += `
    // <li>
    //     <figure>
    //         <img src="${url}"/>
    //         <figcaption>${breed}</figcaption>
    //     </figure>
    // </li>
    // `
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  const allDogs = document.querySelectorAll("li");
  // console.log("allDogs:", allDogs);

  const firstDog = allDogs[0];

  if(firstDog) {
    firstDog.remove();
  } else {
    console.log('no dogs left!')
  }


});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    const allDogs = document.querySelectorAll("li");
    // console.log("allDogs:", allDogs);

    const lastDog = allDogs[allDogs.length - 1];

    if(lastDog) {
      lastDog.remove();
    } else {
      console.log('no dogs left!')
    }

});
