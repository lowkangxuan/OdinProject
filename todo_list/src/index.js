import "./styles.css"
import * as Classes from "./classes";
import * as TabChanger from "./tabchanger";
import * as StorageManager from "./storage";

const projectListContainer = document.getElementById("project-list");
const projectBtns = document.querySelectorAll(".project-btn");
const createListBtn = document.getElementById("create-list");

/* Init localStorage */
StorageManager.initStorage();

function createNewList() {
    const newTaskObj = new Classes.TaskData("Task 1", "sdadaf", "sadD");
    const newProjectObj = new Classes.TodoList("New List", [newTaskObj]);
    StorageManager.addNewProject(newProjectObj);
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