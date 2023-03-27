import homePage from "./home-page";
import menu from "./menu";
import "./styles/styles.css";

// cache DOM elements
const content = document.getElementById("content");

// create header elements for DOM
const header = document.createElement("header");
const nav = document.createElement("nav");
const navUl = document.createElement("ul");
const navLiHome = document.createElement("li");
const navLiMenu = document.createElement("li");
const navLiContact = document.createElement("li");

const navLinks = [navLiHome, navLiMenu, navLiContact];

// give header DOM elements classes/IDs/hrefs
navUl.classList.add("header-nav-list");
navLiHome.classList.add("header-nav-item", "active");
navLiMenu.classList.add("header-nav-item");
navLiContact.classList.add("header-nav-item");

// add content to header DOM elements
navLiHome.textContent = "Home";
navLiMenu.textContent = "Menu";
navLiContact.textContent = "Contact";

// update nav active class
function makeActive(e) {
  if (e.target.classList.contains("active")) return;
  navLinks.forEach((link) => {
    if (
      link.classList.contains("active") &&
      link.textContent !== e.target.textContent
    ) {
      link.classList.remove("active");
    }
  });
  e.target.classList.add("active");
}

// give nav items event listeners.
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", makeActive);
}

// add header elements to DOM
navUl.appendChild(navLiHome);
navUl.appendChild(navLiMenu);
navUl.appendChild(navLiContact);
nav.appendChild(navUl);
header.appendChild(nav);
content.appendChild(header);

// homePage();
menu();
