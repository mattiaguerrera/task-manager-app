export var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "Pending";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
export class Task {
    constructor(id, title, status = TaskStatus.Pending) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}
