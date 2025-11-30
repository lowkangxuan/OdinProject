let projects = [];

export function initStorage() {
    if (localStorage.getItem("projects")) {
        console.log(true);
    }
    else {
        console.log(false);
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