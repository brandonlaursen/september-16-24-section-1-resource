//!!START SILENT
import { resetScore } from "./score.js";
import { resetComments } from "./comments.js";

//!!END
export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    //!!START SILENT
    const newKittenBtn = createNewKittenBtn();

    //!!END
    const container = document.querySelector(".container");
    container.appendChild(h1);
    //!!START SILENT
    container.append(newKittenBtn);
    //!!END
    container.appendChild(img);

    fetchImage();
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
        //!!START SILENT

        kittenImg.addEventListener('load', () => {
            // this component should not know how to implement the score
              // and comments section
            resetScore();
            resetComments();
        });
        //!!END
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

//!!START SILENT
const createNewKittenBtn = () => {
    // Create "New Kitten" button
    const newKittenBtn = document.createElement("button");
    newKittenBtn.id = "new-kitten";
    newKittenBtn.innerText = "New Kitten";
    newKittenBtn.addEventListener('click', fetchImage);
    return newKittenBtn;
};
//!!END