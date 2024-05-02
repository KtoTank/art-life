import { Routes } from '@angular/router';
import {MainComponent} from "./page/main/main.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title:'Art-Life'
  },
  {
    path: '**',
    component: MainComponent,
    redirectTo: ''
  }
];
