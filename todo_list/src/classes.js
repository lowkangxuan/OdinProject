export class TodoList {
    constructor(title, tasks = [], id = crypto.randomUUID()) {
        this.title = title;
        this.tasks = tasks;
        this.id = id;
    }

    getTasks() {
        return this.tasks;
    }

    getNumberOfTasks() {
        return this.tasks.length;
    }

    addTask(taskObj) {
        this.tasks.push(taskObj);
    }

    removeTask(taskObj) {
        this.tasks = this.tasks.filter((task, index) => {
            if (task.id !== taskObj.id) {
                console.log(index);
                return true;
            }
            return false;
        });
    }

    updateTask(taskObj) {
        let modifiedIndex = -1;
        this.tasks.filter((task, index) => {
            if (task.id === taskObj.id) {
                modifiedIndex = index;
            }
        });
        console.log(this.tasks[modifiedIndex]);
    }

    static fromJSON(emptyObject) {
        let tasksArr = [];
        emptyObject.tasks.forEach(task => {
            console.log(task);
            tasksArr.push(new TaskData(task.title, task.description, task.dueDate, task.subtasks, task.isCompleted, task.id));
        });
        return new TodoList(emptyObject.title, tasksArr, emptyObject.id);
    }
}

export class TaskData {
    constructor(title, description = "", dueDate = "", subtasks = [], isCompleted = false, id=crypto.randomUUID()) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.subtasks = subtasks;
        this.isCompleted = isCompleted;
        this.id = id;
    }
}
