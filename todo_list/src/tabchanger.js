import chevronIcon from "./svg/chevron-right.svg";
import plusIcon from "./svg/plus.svg";
import * as Classes from "./classes";

const mainWrapper = document.querySelector(".main-wrapper");
const infoSection = document.getElementById("info-section");
const mainTitle = document.getElementById("project-title");
const titleCounter = document.getElementById("counter-title");
const container = document.getElementById("content-container");
const closeBtn = document.getElementById("close-btn");
const deleteTaskBtn = document.getElementById("delete-btn");
let isInfoOpen = false;
let currOpenedProj = null;
let currOpenedTask = null;

// infoSection.style.display = "none";

closeBtn.addEventListener("click", () => {
    closeInfoSection();
});

deleteTaskBtn.addEventListener("click", () => {
    currOpenedProj.removeTask(currOpenedTask);
    closeInfoSection();
    refreshListOfTasks(currOpenedProj);
});

export function changeTab(projectObj) {
    currOpenedProj = projectObj;
    mainTitle.innerText = projectObj.title;
    titleCounter.innerText = projectObj.getNumberOfTasks();
    refreshListOfTasks(projectObj);
}

function refreshListOfTasks(projectObj) {
    titleCounter.innerText = projectObj.getNumberOfTasks();
    container.innerHTML = "";
    const createBtn = document.createElement("button");
    createBtn.setAttribute("class", "btn new-list");
    createBtn.innerHTML =
    `
        <img src="${plusIcon}" alt="" class="icon small">
        <span>Add New Task</span>
    `
    createBtn.addEventListener("click", (e) => {
       const taskObj = new Classes.TaskData("New task");
       projectObj.addTask(taskObj);
       refreshListOfTasks(projectObj);
    });
    container.appendChild(createBtn);

    projectObj.getTasks().forEach(task => {
        const item = document.createElement("div");
        item.setAttribute("class", "task-item");
        item.innerHTML =
        `
            <input type="checkbox" name="" id="">
            <button class="item-btn">
                <div class="list-info">
                    <span>${task.title}</span>
                    <div class="info-labels"></div>
                </div>
                <img src="${chevronIcon}" class="icon small">
            </button>
        `;
        item.querySelector(".item-btn").addEventListener("click", (e) => {
            displayInfoSection(e,task);
        });
        container.appendChild(item);
    });
}

function displayInfoSection(e, task) {
    if (isInfoOpen) {
        if (task !== currOpenedTask) {
            currOpenedTask = task;
        }
        else {
            closeInfoSection();
        }
    }
    else {
        isInfoOpen = true;
        currOpenedTask = task;
        mainWrapper.style.gridTemplateColumns = "1fr 3fr 1.5fr";
        infoSection.style.display = "block";
    }
}

function closeInfoSection() {
    isInfoOpen = false;
    currOpenedTask = null;
    mainWrapper.style.gridTemplateColumns = "1fr 4.5fr";
    infoSection.style.display = "none";
}