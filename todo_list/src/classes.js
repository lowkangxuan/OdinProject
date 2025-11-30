export class TodoList {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
        this.id = crypto.randomUUID();
    }

    getTasks() {
        return this.tasks;
    }

    getNumberOfTasks() {
        console.log(this.tasks.length);
        return this.tasks.length;
    }

    addTask(taskObj) {
        this.tasks.push(taskObj);
    }

    removeTask(taskObj) {
        this.tasks = this.tasks.filter(task => task.id !== taskObj.id);
    }
}

export class TaskData {
    constructor(title, description = "", dueDate = "", subtasks = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.subtasks = subtasks;
        this.id = crypto.randomUUID();
    }
}
