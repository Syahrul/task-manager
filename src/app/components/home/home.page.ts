import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, DateFormatPipe],
})
export class Tab1Page {
  date = new Date();

  constructor() { }
}
