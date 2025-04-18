import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListsPage } from './task-lists.page';

describe('Tab2Page', () => {
  let component: TaskListsPage;
  let fixture: ComponentFixture<TaskListsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TaskListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
