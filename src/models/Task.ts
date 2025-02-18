export enum TaskStatus {
    Pending = "Pending",
    Completed = "Completed",
  }
  
  export class Task {
    constructor(
      public id: number,
      public title: string,
      public status: TaskStatus = TaskStatus.Pending,
    ) {}
  }
  