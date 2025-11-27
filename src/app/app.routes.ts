import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms';

export const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'forms' }
];
