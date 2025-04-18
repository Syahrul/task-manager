import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { ApiTasksComponent } from '../task-manager/api-tasks/api-tasks.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    DateFormatPipe,
    IonFab,
    IonFabButton,
    IonIcon,
    RouterModule,
    ApiTasksComponent,
  ],
})
export class Tab1Page {
  // Display date on top of the page
  date = new Date();

  @ViewChild(ApiTasksComponent) apiTasks!: ApiTasksComponent;

  constructor() {
    addIcons({ addSharp });
  }

  ionViewWillEnter() {
    // call everytime user enters the page
    // but we implmented simple data caching in the service
    // so there won't be any network calls
    // if the data is already cached
    this.apiTasks.loadTasks();
  }
}
