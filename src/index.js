import { homePage } from "./homepage.js"
import { menu } from "./menu.js";
import { about } from "./about.js"

function tabPageLogic() {
    // start on homepage 
    homePage();

    const homePageButton = document.querySelector(".home");
    const menuPageButton = document.querySelector(".menu");
    const aboutPageButton = document.querySelector(".about");

    homePageButton.addEventListener("click", () => homePage());
    menuPageButton.addEventListener("click", () => menu());
    aboutPageButton.addEventListener("click", () => about());

}

tabPageLogic();

