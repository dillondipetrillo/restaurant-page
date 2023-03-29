export default function contact() {
  // cache div with id content
  const content = document.getElementById("content");

  // create new DOM elements
  const contactSection = document.createElement("section");
  const contactH1 = document.createElement("h1");
  const contactInfoDiv = document.createElement("div");
  const contactInfoHeader = document.createElement("h2");
  const contactPhone = document.createElement("span");
  const contactInfoP = document.createElement("p");

  // give DOM elements classes/IDs
  contactSection.setAttribute("id", "contact");
  contactSection.classList.add("contact-section", "show", "hide");
  contactH1.classList.add("contact-header");
  contactInfoDiv.classList.add("contact-info-div");
  contactInfoHeader.classList.add("contact-info-header");
  contactPhone.classList.add("contact-phone");
  contactInfoP.classList.add("contact-info-paragraph");

  // add content to DOM elements
  contactH1.textContent = "Contact";
  contactInfoHeader.textContent = "Italian Creation's Info";
  contactPhone.textContent = "800-333-6666";
  contactInfoP.textContent =
    "Welcome to Italian Creation, the restaurant where culinary magic happens! Our chefs have been trained in the art of Italian cooking, bringing the traditional flavors of Italy to your plate with a modern twist. From the rich aromas of garlic and basil to the creamy textures of handmade pasta, every dish is a work of art that will transport your taste buds straight to the streets of Rome. Our menu is filled with classic Italian dishes, such as our signature spaghetti alla carbonara, made with perfectly cooked pasta, crispy pancetta, and freshly grated parmesan cheese. Or try our mouth-watering margherita pizza, topped with the finest Italian tomatoes, buffalo mozzarella, and fragrant basil. But we don't stop at the classics. So come join us at Italian Creation, and experience the best of Italian cuisine in a warm and welcoming atmosphere. Buon appetito!";

  // add DOM elemets to content section
  contactInfoDiv.appendChild(contactInfoHeader);
  contactInfoDiv.appendChild(contactPhone);
  contactInfoDiv.appendChild(contactInfoP);
  contactSection.appendChild(contactH1);
  contactSection.appendChild(contactInfoDiv);
  content.appendChild(contactSection);
}
