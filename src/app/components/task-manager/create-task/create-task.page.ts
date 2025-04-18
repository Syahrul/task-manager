import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonInput,
  IonItem,
  IonList,
  IonTextarea,
  IonDatetime,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonButton,
    IonDatetime,
    IonTextarea,
    IonList,
    IonItem,
    IonInput,
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    ReactiveFormsModule,
  ],
})
export class CreateTaskPage implements OnInit {
  today: string;
  addNewTaskForm!: FormGroup; // marked ! as this will be initialized in ngOnInit to avoid undefined error in typescript
  addnewTaskFormSubmitted = false;

  constructor(private taskManagerService: TaskManagerService) {
    // correctly set the date to the current date in local format
    const now = new Date();
    // function to pad numbers with leading zeros for formatting
    // e.g. 1 becomes 01, 10 remains 10
    // this is used to format the date string in YYYY-MM-DDTHH:MM:SS format
    // YYYY-MM-DDTHH:MM:SS is the format used by the IonDatetime component
    const pad = (n: number) => n.toString().padStart(2, '0');
    this.today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }

  ngOnInit() {
    this.addNewTaskForm = new FormGroup({
      date: this.createFormControl(this.today),
      title: this.createFormControl(),
      description: this.createFormControl(),
    });
  }

  private createFormControl(initialValue: any = ''): FormControl {
    return new FormControl(initialValue, {
      validators: Validators.required,
      updateOn: 'submit',
    });
  }

  addNewTask() {
    const task = this.addNewTaskForm.value;
    this.addnewTaskFormSubmitted = true;
    // check if the form is valid before proceeding
    if (this.addNewTaskForm.valid) {
      const { date, title, description } = task;
      // create a new task object
      this.taskManagerService.addTask({
        id: Date.now(),
        date,
        title,
        description,
        completed: false,
      });

      // reset the form after submission
      this.addnewTaskFormSubmitted = false;
      this.addNewTaskForm.setValue({
        date: this.today,
        title: '',
        description: '',
      });
    }
  }
}
