let projects = [];

export function initStorage() {

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