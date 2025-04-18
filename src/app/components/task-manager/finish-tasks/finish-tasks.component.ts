import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { Task } from '../../../models/task.model';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-finish-tasks',
  templateUrl: './finish-tasks.component.html',
  styleUrls: ['./finish-tasks.component.scss'],
  imports: [DateFormatPipe],
  standalone: true,
})
export class FinishTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskManagerService: TaskManagerService) {}

  ngOnInit() {}

  loadTasks() {
    // Fetch the tasks from the TaskManagerService when the component is about to enter the view
    this.tasks = this.taskManagerService.getTasks();
  }

  // Check if there are any completed tasks
  get hasCompleteTasks(): boolean {
    return this.tasks.some((task) => task.completed);
  }
}
