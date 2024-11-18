import { createMainContent } from './main.js';
//!!START SILENT
import { createScoreContainer } from './score.js';
import { createCommentSection } from './comments.js';
//!!END

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
    //!!START SILENT
    createScoreContainer();
    createCommentSection();
    //!!END
};