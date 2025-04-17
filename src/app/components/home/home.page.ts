import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, DateFormatPipe, IonFab, IonFabButton, IonIcon],
})
export class Tab1Page {
  // Display date on top of the page
  date = new Date();

  constructor() {
    addIcons({ addSharp });
  }
}
