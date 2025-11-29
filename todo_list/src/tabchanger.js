const mainTitle = document.getElementById("project-title");
const itemsContainer = document.getElementById("items");
let isInfoOpen = false;

export function changeTab(projectObj) {
    console.log(projectObj);
    mainTitle.innerText = projectObj.title;
}

export function toggleInfoTab() {
    
}