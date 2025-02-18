import { TaskManager } from "./services/TaskManager.js";
// Funzione per inizializzare l'app
function initApp() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskListElement = document.getElementById('task-list');
    const taskManager = new TaskManager(taskListElement);
    // Aggiungi una nuova attività
    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            taskManager.addTask(taskName);
            taskInput.value = ''; // Reset input
        }
    });
    // Permetti di aggiungere attività anche premendo "Enter"
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskName = taskInput.value.trim();
            if (taskName) {
                taskManager.addTask(taskName);
                taskInput.value = ''; // Reset input
            }
        }
    });
}
// Inizializza l'app
initApp();
