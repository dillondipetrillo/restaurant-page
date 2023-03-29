export default function homePage() {
  // cach DOM element
  const homeContent = document.getElementById("content");

  // create new DOM elements
  const homeHeroMain = document.createElement("main");
  const homeHeroSection = document.createElement("section");
  const homeHeroH1 = document.createElement("h1");
  const homeHeroImgContainer = document.createElement("div");
  const homeHeroDiv = document.createElement("div");

  // give new DOM elements classes/IDs
  homeHeroMain.setAttribute("id", "home");
  homeHeroMain.classList.add("home-section", "show", "hide");
  homeHeroSection.setAttribute("id", "hero");
  homeHeroH1.classList.add("hero-title");
  homeHeroImgContainer.classList.add("hero-img-container");
  homeHeroDiv.classList.add("hero-about");

  // add content to new DOM elements
  homeHeroH1.textContent = "Italian Creations";
  homeHeroDiv.textContent =
    "Our restaurant is the place where you can savor the flavors of Italy. Our menu is inspired by the rich culinary traditions of Italy, and our chefs use only the freshest and most authentic ingredients to create dishes that will transport you to the heart of Rome. So come on down to Italian Creations, where every meal is a masterpiece and every guest is treated like family. We can't wait to share our passion for Italian cuisine with you!";

  // append all create DOM elements to the DOM
  homeHeroSection.appendChild(homeHeroH1);
  homeHeroSection.appendChild(homeHeroImgContainer);
  homeHeroSection.appendChild(homeHeroDiv);
  homeHeroMain.appendChild(homeHeroSection);
  homeContent.appendChild(homeHeroMain);
}
