export function homePage() {
    // bg image
    const bgImage = document.createElement(img);
    bgImage.src = "./vadim-bogulov-veSRX0sZDpQ-unsplash.jpg";
    bgImage.alt = "ominous room";

    // restaurant name
    const restaurantName = document.createElement(div);
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "The Void";

    // subtext1
    const subtext1 = document.createElement(div);
    subtext1.classList.add("subtext");
    subtext1.textContent = "Experience nothing. Taste everything. We serve the essence of simplicity.";
    

    // subtext2
    const subtext2 = document.createElement(div);
    subtext2.classList.add("subtext");
    subtext2.textContent = "Our philosophy: Less is more. Much less if much more. Nothing is everything.";


    // append everything to content div
    const content = document.querySelector(".content");
    content.appendChild(bgImage);
    content.appendChild(restaurantName);
    content.appendChild(subtext1);
    content.appendChild(subtext2);

}