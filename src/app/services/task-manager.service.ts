import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private storageKey = 'mytasks';

  constructor() {}

  // Get all tasks
  getTasks(): Task[] {
    const tasksJson = localStorage.getItem(this.storageKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  // Save all tasks
  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  // Add new task
  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  // Update completed status of a task
  updateTaskStatus(taskId: number, completed: boolean): void {
    const tasks = this.getTasks().map((task) => {
      if (task.id === taskId) {
        return { ...task, completed };
      }
      return task;
    });
    this.saveTasks(tasks);
  }

  // Delete task
  deleteTask(taskId: number): void {
    const tasks = this.getTasks().filter((task) => task.id !== taskId);
    this.saveTasks(tasks);
  }
}
