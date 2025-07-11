import { homePage } from "./homepage.js"
import { menu } from "./menu.js";

function tabPageLogic() {
    // start on homepage 
    homePage();

    const homePageButton = document.querySelector(".home");
    const menuPageButton = document.querySelector(".menu");
    // const contactPageButton = document.querySelector(".about");

    homePageButton.addEventListener("click", () => homePage());
    menuPageButton.addEventListener("click", () => menu());
}

tabPageLogic();

