import img1 from "./imgs/main-1.jpg";
import img2 from "./imgs/main-2.jpg";

export function getMainPage() {
    const section = document.createElement("section");

    section.className = "home";
    section.innerHTML = `
        <div class="card main">
            <div class="details" style="max-width: 50%;">
                <h2>Enjoy a delicious burger you've never tasted before</h2>
                <p>Customize however way you like</p>
                <button type="button">Order Now</button>
            </div>
        </div>
        <div class="card image">
            <img src="${img1}" alt="" style="object-position: 0 -400px;">
        </div>
        <div class="card image">
            <img src="${img2}" alt="" style="object-position: 0 -500px;">
        </div>
    `;
    return section;
}