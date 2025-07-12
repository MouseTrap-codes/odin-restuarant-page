export function menu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    // restaurant name
    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "The Void";

    // menu items
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    function createMenuItem(name, price, desc) {
        const container = document.createElement("div");

        const item = document.createElement("div");
        item.classList.add("menu-item");
        item.textContent = `${name} - $${price}`;

        const itemDesc = document.createElement("em");
        itemDesc.classList.add("menu-desc");
        itemDesc.textContent = desc;

        container.appendChild(item);
        container.appendChild(itemDesc);

        return container;
    }

    const items = [
        ["Zen Water", 8, "It's just tap water in a fancy glass"],
        ["Deconstructed Salad", 15, "Literally just a whole lettuce head on a plate"],
        ["Invisible Soup", 12, "Empty bowl with a spoon"],
        ["Artisanal Air Sandwich", 18, "Two pieces of bread with nothing between them"],
        ["The Concept of Pasta", 22, "A single noodle in the center of a large white plate"],
        ["Minimalist Pizza", 25, "Plain dough circle, no toppings"],
        ["Essence of Chocolate", 14, "A tiny brown dot on a white plate"],
        ["Theoretical Coffee", 6, "Empty cup with coffee aroma somehow"],
        ["Meditation Meal", 30, "You sit and imagine eating"]
    ];

    items.forEach(([name, price, desc]) => {
        const itemBlock = createMenuItem(name, price, desc);
        menuContainer.appendChild(itemBlock);
    })

    content.appendChild(restaurantName);
    content.appendChild(menuContainer);
}

   