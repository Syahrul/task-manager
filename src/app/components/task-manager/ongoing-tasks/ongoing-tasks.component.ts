import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { addIcons } from 'ionicons';
import { checkmarkDoneOutline, trashBinOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ongoing-tasks',
  templateUrl: './ongoing-tasks.component.html',
  styleUrls: ['./ongoing-tasks.component.scss'],
  imports: [IonButton, IonIcon, DateFormatPipe],
  standalone: true,
})
export class OngoingTasksComponent implements OnInit {
  tasks: Task[] = [];

  // Sibling communication
  @Output() taskUpdated = new EventEmitter<void>();

  constructor(private taskManagerService: TaskManagerService) {
    addIcons({ trashBinOutline, checkmarkDoneOutline });
  }

  ngOnInit() {}

  loadTasks() {
    // Fetch the tasks from the TaskManagerService when the component is about to enter the view
    this.tasks = this.taskManagerService.getTasks();
  }

  // Check if there are any completed tasks
  get hasIncompleteTasks(): boolean {
    return this.tasks.some((task) => !task.completed);
  }

  deleteTask(taskID: number) {
    // Delete the task using the TaskManagerService
    this.taskManagerService.deleteTask(taskID);
    this.loadTasks(); // Reload the tasks after deletion
  }

  completeTask(taskID: number) {
    // Update the task status using the TaskManagerService
    this.taskManagerService.updateTaskStatus(taskID, true);
    this.taskUpdated.emit(); // tell parent something happened so finish tasks can reload
    this.loadTasks(); // Reload the tasks after updating
  }
}
