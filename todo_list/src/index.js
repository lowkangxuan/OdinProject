import "./styles.css"
import { greeting } from "./test";

console.log(greeting);

const listBtns = document.querySelectorAll(".list-btn");

for (const btn of listBtns) {
    btn.addEventListener("click", (e) => {
        console.log("test");
    });
};