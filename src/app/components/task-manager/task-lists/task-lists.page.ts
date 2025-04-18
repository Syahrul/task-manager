import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { OngoingTasksComponent } from '../ongoing-tasks/ongoing-tasks.component';
import { FinishTasksComponent } from '../finish-tasks/finish-tasks.component';

@Component({
  selector: 'app-task-lists',
  templateUrl: 'task-lists.page.html',
  styleUrls: ['task-lists.page.scss'],
  imports: [
    IonContent,
    DateFormatPipe,
    OngoingTasksComponent,
    FinishTasksComponent,
  ],
})
export class TaskListsPage {
  // Display date on top of the page
  date = new Date();

  @ViewChild(OngoingTasksComponent) onGoingTasks!: OngoingTasksComponent;
  @ViewChild(FinishTasksComponent) finishTasks!: FinishTasksComponent;

  constructor() {}

  ionViewWillEnter() {
    // call the loadTasks method of the OngoingTasksComponent when the page is about to enter
    this.onGoingTasks.loadTasks();
    this.finishTasks.loadTasks();
  }

  onTaskUpdated() {
    // When a task is updated in the ongoing tasks, reload the tasks in the finish tasks
    this.finishTasks.loadTasks();
  }
}
