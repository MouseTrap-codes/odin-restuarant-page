export function menu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    // restaurant name
    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "The Void";

    // menu items
    const menuContainer = document.createElement("div");
    menuContainer.classList.add(".menu-container");


    const item1 = document.createElement("div");
    item1.classList.add(".menu-item");
    item1.textContent = "Zen Water - $8 (It's just tap water in a fancy glass)";

    const item2 = document.createElement("div");
    item2.classList.add(".menu-item");
    item2.textContent = "Deconstructed Salad - $15 (Literally just a whole lettuce head on a plate)";

    const item3 = document.createElement("div");
    item3.classList.add(".menu-item");
    item3.textContent = "Invisible Soup - $12 (Empty bowl with a spoon)";

    const item4 = document.createElement("div");
    item4.classList.add(".menu-item");
    item4.textContent = "Artisanal Air Sandwich - $18 (Two pieces of bread with nothing between them)";
    
    const item5 = document.createElement("div");
    item5.classList.add(".menu-item");
    item5.textContent = "The Concept of Pasta - $22 (A single noodle in the center of a large white plate)";

    const item6 = document.createElement("div");
    item6.classList.add(".menu-item");
    item6.textContent = "Minimalist Pizza - $25 (Plain dough circle, no toppings)";

    const item7 = document.createElement("div");
    item7.classList.add(".menu-item");
    item7.textContent = "Essence of Chocolate - $14 (A tiny brown dot on a white plate)";

    const item8 = document.createElement("div");
    item8.classList.add(".menu-item");
    item8.textContent = "Theoretical Coffee - $6 (Empty cup with coffee aroma somehow)";

    const item9 = document.createElement("div");
    item9.classList.add(".menu-item");
    item9.textContent = "Meditation Meal - $30 (You sit and imagine eating)";

    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(item5);
    menuContainer.appendChild(item6);
    menuContainer.appendChild(item7);
    menuContainer.appendChild(item8);
    menuContainer.appendChild(item9);

    content.appendChild(restaurantName);
    content.appendChild(menuContainer);
}

   