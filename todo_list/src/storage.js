import { TodoList } from "./classes";

let projects = [];

export function initStorage() {
    if (localStorage.getItem("projects")) {
        JSON.parse(localStorage.getItem("projects")).forEach((item) => {
           projects.push(TodoList.fromJSON(item));
        });
    }
    else {
        localStorage.setItem("projects", null);
    }
}

export function clearStorage() {
    localStorage.clear();
}

export function addNewProject(obj) {
    projects.push(obj);
}

export function getAllProjects() {
    return projects;
}

export function save() {
    localStorage.setItem("projects", JSON.stringify(projects));
}