export function about() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    
    // restaurant name
    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "The Void";

    // the story
    const ourStory = document.createElement("div");
    ourStory.classList.add(".about-subsection");

    const ourStoryTitle = document.createElement("div");
    ourStoryTitle.classList.add("about-header");
    ourStoryTitle.textContent = "Our Story"
    const ourStoryText1 = document.createElement("div");
    ourStoryText1.classList.add("about-content");
    ourStoryText1.textContent = `The Void was born from a simple question: "What if we served nothing, but made it everything?" Founded in 2023 by renowned chef Marcel Blanc (who ironically trained at some of the world's most excessive restaurants), The Void represents the ultimate rebellion against culinary excess.`
    const ourStoryText2 = document.createElement("div");
    ourStoryText2.classList.add("about-content");
    ourStoryText2.textContent = `After years of creating 47-ingredient dishes with foam, dust, and edible flowers, Chef Blanc experienced what he calls "The Great Emptying" - a moment of clarity where he realized that true sophistication lies not in what you add, but in what you courageously leave out.`;

    ourStory.appendChild(ourStoryTitle);
    ourStory.appendChild(ourStoryText1);
    ourStory.appendChild(ourStoryText2);

    aboutContainer.appendChild(ourStory);

    // the philosophy
    const ourPhilosophy = document.createElement("div");
    ourStory.classList.add(".about-subsection");

    const ourPhilosophyTitle = document.createElement("div");
    ourPhilosophyTitle.classList.add("about-header");
    ourPhilosophyTitle.textContent = "Our Philosophy"
    const ourPhilosophyText1 = document.createElement("div");
    ourPhilosophyText1.classList.add("about-content");
    ourPhilosophyText1.textContent = `We believe that dining is not about consumption, but contemplation. Each empty plate is a canvas. Each vacant bowl is a meditation. When you order our "Zen Water," you're not just drinking H2O - you're experiencing the essence of hydration in its purest form.`
    const ourPhilosophyText2 = document.createElement("div");
    ourPhilosophyText2.classList.add("about-content");
    ourPhilosophyText2.textContent = `Our minimalist approach extends beyond the menu. Our servers communicate primarily through meaningful glances. Our kitchen operates in complete silence. Even our salt and pepper shakers contain only the concept of seasoning.`;

    ourPhilosophy.appendChild(ourPhilosophyTitle);
    ourPhilosophy.appendChild(ourPhilosophyText1);
    ourPhilosophy.appendChild(ourPhilosophyText2);

    aboutContainer.appendChild(ourPhilosophy);

    // the experience
    const theExperience = document.createElement("div");
    ourStory.classList.add(".about-subsection");

    const theExperienceTitle = document.createElement("div");
    theExperienceTitle.classList.add("about-header");
    theExperienceTitle.textContent = "The Experience"
    const theExperienceText1 = document.createElement("div");
    theExperienceText1.classList.add("about-content");
    theExperienceText1.textContent = `Dining at The Void is more than a meal - it's a journey into the space between hunger and satisfaction. You'll discover that sometimes the most profound flavors are the ones you imagine.`

    theExperience.appendChild(theExperienceTitle);
    theExperience.appendChild(theExperienceText1);

    aboutContainer.appendChild(theExperience);

    // chef's note
    const chefNote = document.createElement("div");
    ourStory.classList.add(".about-subsection");

    const chefNoteTitle = document.createElement("div");
    chefNoteTitle.classList.add("about-header");
    chefNoteTitle.textContent = "Chef's Note"
    const chefNoteText1 = document.createElement("div");
    chefNoteText1.classList.add("about-content");
    chefNoteText1.textContent = `People ask me if this is all a joke. I tell them that humor is just another ingredient we've chosen to leave out. Take from that what you will." - Chef Marcel Blanc`

    chefNote.appendChild(chefNoteTitle);
    chefNote.appendChild(chefNoteText1);

    aboutContainer.appendChild(chefNote);

    // tagline
    const tagline = document.createElement("div");
    tagline.classList.add("about-subsection")
    
    const tagContainer = document.createElement("div");
    tagContainer.classList.add("about-content");
    const taglineText = document.createElement("em");
    taglineText.classList.add("tagline-text");
    taglineText.textContent = "The Void: Where culinary expectations come to disappear.";

    tagContainer.appendChild(taglineText);
    tagline.appendChild(tagContainer);

    aboutContainer.append(tagline);


    content.append(restaurantName)
    content.appendChild(aboutContainer);







}