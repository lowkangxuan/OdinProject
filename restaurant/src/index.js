import "./style.css";
import { getMainPage } from "./main-page.js";
import { getMenuPage } from "./menu-page.js";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");
const contentElem = document.getElementById("content");

// contentElem.innerHTML = "";

homeBtn.addEventListener("click", () => {
    renderContent(getMainPage());
});

menuBtn.addEventListener("click", () => {
    renderContent(getMenuPage());
});

function renderContent(content) {
    contentElem.innerHTML = "";
    contentElem.appendChild(content);
}
