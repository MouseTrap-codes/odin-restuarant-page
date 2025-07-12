// ./src/homepage.js
export function homePage() {

    const content = document.querySelector("#content");
    content.innerHTML = "";

    // restaurant name
    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "The Void";

    const subtext = document.createElement("div");
    subtext.classList.add("subtext-container");

    // subtext1
    const subtext1 = document.createElement("div");
    subtext1.classList.add("subtext-sub");
    subtext1.textContent = "Experience nothing. Taste everything. We serve the essence of simplicity.";
    

    // subtext2
    const subtext2 = document.createElement("div");
    subtext2.classList.add("subtext-sub");
    subtext2.textContent = "Our philosophy: Less is more. Much less if much more. Nothing is everything.";

    subtext.appendChild(subtext1);
    subtext.appendChild(subtext2);

    // append everything to content div
    content.appendChild(restaurantName);
    content.appendChild(subtext);

}