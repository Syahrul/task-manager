import { Component, OnInit } from '@angular/core';
import { TaskApiService } from 'src/app/services/task-api.service';
import { IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-api-tasks',
  templateUrl: './api-tasks.component.html',
  styleUrls: ['./api-tasks.component.scss'],
  imports: [IonSpinner],
  standalone: true,
})
export class ApiTasksComponent implements OnInit {
  tasks: any[] = [];
  loading: boolean = false;

  constructor(private taskAPIService: TaskApiService) {}

  ngOnInit() {}

  loadTasks() {
    this.loading = true;
    this.taskAPIService
      .getDummyData()
      .subscribe((data) => {
        this.tasks = data;
      })
      .add(() => {
        this.loading = false;
      });
  }
}
