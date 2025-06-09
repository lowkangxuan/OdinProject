// const sections = document.querySelector(".section");

// const p = document.createElement("p");
// p.setAttribute("style", "color: red;");
// p.textContent = "Hey I'm red";

// const h3 = document.createElement("h3");
// h3.setAttribute("style", "color: blue");
// h3.textContent = "I'm a blue h3";

// const div = document.createElement("div");
// div.setAttribute("style", "border: 2px solid black; background-color: pink;");
// const newH1 = document.createElement("h1");
// newH1.textContent = "I'm in a div";
// const newP = document.createElement("p");
// newP.textContent = "ME TOO!";
// div.appendChild(newH1);
// div.appendChild(newP);

// div.classList.add("test");
// sections.appendChild(div);
// console.log(div);

let testFunc = (a) => {
    console.log("test");
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        testFunc("hi");
    });
});