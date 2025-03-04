import { Task, TaskStatus } from "../models/Task.js";

// La classe TaskManager gestisce l'elenco delle attività
export class TaskManager {
  private tasks: Task[] = [];
  private taskListElement: HTMLElement;

  constructor(taskListElement: HTMLElement) {
    this.taskListElement = taskListElement;
  }

  // Aggiungi una nuova attività
  addTask(taskName: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: taskName,
      status: TaskStatus.Pending,
    };
    this.tasks.push(newTask);
    this.renderTasks();
  }

  // Modifica un'attività (segna come completata o meno)
  toggleTaskCompletion(taskId: number): void {
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
  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.renderTasks();
  }

  // Rendi l'array delle attività visibile nella lista
  renderTasks(): void {
    this.taskListElement.innerHTML = "";
    this.tasks.forEach((task) => {
      const taskElement = document.createElement("li");
      taskElement.className =
        task.status === TaskStatus.Completed ? "completed" : "";

      const taskName = document.createElement("span");
      taskName.textContent = task.title;

      const toggleButton = document.createElement("button");
      toggleButton.textContent =
        task.status === TaskStatus.Completed ? "✗" : "✓";
      toggleButton.className =
        task.status === TaskStatus.Completed
          ? "toggle-btn success"
          : "toggle-btn warn";
      toggleButton.onclick = () => this.toggleTaskCompletion(task.id);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Rimuovi";
      deleteButton.onclick = () => this.removeTask(task.id);
      deleteButton.className = "delete";

      taskElement.appendChild(taskName);
      taskElement.appendChild(toggleButton);
      taskElement.appendChild(deleteButton);
      this.taskListElement.appendChild(taskElement);
    });
  }
}
