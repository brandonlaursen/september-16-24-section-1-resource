/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image
        console.log(url)
        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url)

        * extract the breed from the url
        * create an li element
            - const li = document.createElement('li')
        * create figure element
        * create image element
             * set the src the url
             * img.src = url
        * create figcaption
            * set innerText to the breed
        * append the img to the figure
            * figureEle.appendChild(newImg)
        * append the figcaption to the figure
            * figureEle.appendChild(newFigCaption)
        * append the figureEle to the li
        * query the ul element
        * append the li to the ul


        removing elements
        .remove();

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
