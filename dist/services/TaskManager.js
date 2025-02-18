import { TaskStatus } from "../models/Task.js";
// La classe TaskManager gestisce l'elenco delle attività
export class TaskManager {
    constructor(taskListElement) {
        this.tasks = [];
        this.taskListElement = taskListElement;
    }
    // Aggiungi una nuova attività
    addTask(taskName) {
        const newTask = {
            id: this.tasks.length + 1,
            title: taskName,
            status: TaskStatus.Pending,
        };
        this.tasks.push(newTask);
        this.renderTasks();
    }
    // Modifica un'attività (segna come completata o meno)
    toggleTaskCompletion(taskId) {
        const task = this.tasks.filter((task) => task.id === taskId)[0];
        if (task) {
            task.status =
                task.status === TaskStatus.Pending
                    ? TaskStatus.Completed
                    : TaskStatus.Pending;
            this.renderTasks();
        }
    }
    // Rimuovi un'attività
    removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.renderTasks();
    }
    // Rendi l'array delle attività visibile nella lista
    renderTasks() {
        this.taskListElement.innerHTML = "";
        this.tasks.forEach((task) => {
            const taskElement = document.createElement("li");
            taskElement.className =
                task.status === TaskStatus.Completed ? "completed" : "";
            const taskName = document.createElement("span");
            taskName.textContent = task.title;
            const toggleButton = document.createElement("button");
            toggleButton.textContent =
                task.status === TaskStatus.Completed
                    ? "Segna come incompleta"
                    : "Segna come completa";
            toggleButton.onclick = () => this.toggleTaskCompletion(task.id);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Rimuovi";
            deleteButton.onclick = () => this.removeTask(task.id);
            taskElement.appendChild(taskName);
            taskElement.appendChild(toggleButton);
            taskElement.appendChild(deleteButton);
            this.taskListElement.appendChild(taskElement);
        });
    }
}
