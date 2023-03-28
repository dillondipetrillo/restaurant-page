import breakSticks from "./assets/bread-sticks.jpg";
import bruschetta from "./assets/bruschetta.jpg";
import canoli from "./assets/canoli.jpg";
import caprese from "./assets/caprese.jpg";
import lasagna from "./assets/lasagna.jpg";
import pizza from "./assets/pizza.jpg";
import ravioli from "./assets/ravioli.jpg";
import shortRib from "./assets/short-rib.jpeg";
import tiramisu from "./assets/tiramisu.jpg";

export default function menu() {
  // cache DOM element(s)
  const content = document.getElementById("content");

  // create array with menu item objects
  const menuItems = [
    {
      dish: "Pizza",
      cost: "12.99",
      imgSrc: pizza,
      meal: "entre",
    },
    {
      dish: "Ravioli",
      cost: "18.50",
      imgSrc: ravioli,
      meal: "entre",
    },
    {
      dish: "Lasagna",
      cost: "24.99",
      imgSrc: lasagna,
      meal: "entre",
    },
    {
      dish: "Braised Short Rib",
      cost: "48.99",
      imgSrc: shortRib,
      meal: "entre",
    },
    {
      dish: "Bread Sticks",
      cost: "4.99",
      imgSrc: breakSticks,
      meal: "appetizer",
    },
    {
      dish: "Bruschetta",
      cost: "14.99",
      imgSrc: bruschetta,
      meal: "appetizer",
    },
    {
      dish: "Caprese Salad",
      cost: "13.49",
      imgSrc: caprese,
      meal: "appetizer",
    },
    {
      dish: "Canoli's",
      cost: "10.49",
      imgSrc: canoli,
      meal: "dessert",
    },
    {
      dish: "Tiramisu",
      cost: 12.99,
      imgSrc: tiramisu,
      meal: "dessert",
    },
  ];

  // create new DOM elements
  const menuSection = document.createElement("section");
  const menuH1 = document.createElement("h1");
  const menuItemsContainer = document.createElement("div");
  const appetizers = document.createElement("div");
  const entres = document.createElement("div");
  const desserts = document.createElement("div");
  const appetizerTitle = document.createElement("h2");
  const entreTitle = document.createElement("h2");
  const dessertTitle = document.createElement("h2");

  menuH1.textContent = "Menu";
  appetizerTitle.textContent = "Appetizers";
  entreTitle.textContent = "Entres";
  dessertTitle.textContent = "Desserts";

  appetizers.appendChild(appetizerTitle);
  entres.appendChild(entreTitle);
  desserts.appendChild(dessertTitle);

  // loop through menu items and create/append them in correct div category
  for (let menuItem of menuItems) {
    const item = document.createElement("div");
    const menuContentContainer = document.createElement("div");
    const itemTitle = document.createElement("h3");
    const itemImgContainer = document.createElement("div");
    const itemImg = document.createElement("img");
    const itemPrice = document.createElement("span");

    item.classList.add("menu-item");
    menuContentContainer.classList.add("menu-item-content");
    itemTitle.classList.add("menu-item-title");
    itemImgContainer.classList.add("menu-item-img-container");
    itemPrice.classList.add("menu-item-price");

    itemTitle.textContent = menuItem.dish;
    itemImg.src = menuItem.imgSrc;
    itemImg.alt = menuItem.dish;
    itemPrice.textContent = menuItem.cost;

    itemImgContainer.appendChild(itemImg);
    menuContentContainer.appendChild(itemTitle);
    menuContentContainer.appendChild(itemPrice);
    item.appendChild(itemImgContainer);
    item.appendChild(menuContentContainer);

    if (menuItem.meal === "appetizer") {
      appetizers.appendChild(item);
    } else if (menuItem.meal === "entre") {
      entres.appendChild(item);
    } else if (menuItem.meal === "dessert") {
      desserts.appendChild(item);
    } else {
      return;
    }
  }

  // add classes/IDs to DOM elements
  menuSection.setAttribute("id", "menu");
  menuSection.classList.add("menu-section");
  menuH1.classList.add("menu-title");
  menuItemsContainer.classList.add("menu-items-container");
  appetizers.classList.add("menu-list", "appetizers");
  entres.classList.add("menu-list", "entres");
  desserts.classList.add("menu-list", "desserts");
  appetizerTitle.classList.add("meal-title");
  entreTitle.classList.add("meal-title");
  dessertTitle.classList.add("meal-title");

  // append DOM elements
  menuItemsContainer.appendChild(appetizers);
  menuItemsContainer.appendChild(entres);
  menuItemsContainer.appendChild(desserts);
  menuSection.appendChild(menuH1);
  menuSection.appendChild(menuItemsContainer);
  content.appendChild(menuSection);
}
