import "./styles.css"
import * as TabChanger from "./tabchanger";
import * as ListTab from "./list-tab";
import * as StorageManager from "./storage";

const mainWrapper = document.querySelector(".main-wrapper");
const infoSection = document.querySelector(".info-section");
const projectListContainer = document.getElementById("project-list");
const projectBtns = document.querySelectorAll(".project-btn");
const createListBtn = document.getElementById("create-list");
let isInfoOpen = false;

/* Init localStorage */
StorageManager.initStorage();

class TodoList {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
        this.id = crypto.randomUUID();
    }

    getTasks() {
        return tasks;
    }
}

class TaskData {
    constructor(title, description, dueDate, subtasks = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.subtasks = subtasks;
    }
}

const testData = new TaskData("task 1", "sdadaf", "sadD");
const testList = new TodoList("A List", [testData]);
infoSection.style.display = "none";

document.querySelector(".item-btn").addEventListener("click", (e) => {
    if (!isInfoOpen) {
        isInfoOpen = true;
        mainWrapper.style.gridTemplateColumns = "1fr 3fr 1.5fr";
        infoSection.style.display = "block";
    }
    else {
        isInfoOpen = false;
        mainWrapper.style.gridTemplateColumns = "1fr 4.5fr";
        infoSection.style.display = "none";
    }
});

function createNewList() {
    const newProjectObj = new TodoList("New List");
    const listElem = document.createElement("li");
    listElem.innerHTML = 
    `
        <button class="btn project-btn" data-id=${newProjectObj.id}>
            <img src="svg/square-rounded.svg" alt="" class="icon tiny">${newProjectObj.title}
        </button>
    `;

    StorageManager.addNewProject(newProjectObj);

    return listElem;
}

function refreshProjectList() {
    const projects = StorageManager.getAllProjects();
    projectListContainer.innerHTML = "";
    projects.forEach(project => {
        const listElem = document.createElement("li");
        listElem.innerHTML =
        `
            <button class="btn project-btn" data-id=${project.id}>
                <img src="svg/square-rounded.svg" alt="" class="icon tiny">${project.title}
            </button>
        `;

        listElem.querySelector(".project-btn").addEventListener("click", (e) => {
           TabChanger.changeTab(project);
        });
        projectListContainer.appendChild(listElem);
    });
}

createListBtn.addEventListener("click", (e) => {
    createNewList();
    refreshProjectList();
});

projectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // TabChanger.changeTab();
    });
});