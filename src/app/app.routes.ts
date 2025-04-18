import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'create-task',
    loadComponent: () => import('./components/task-manager/create-task/create-task.page').then( m => m.CreateTaskPage)
  },
];
