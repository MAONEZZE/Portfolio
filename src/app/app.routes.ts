import { Routes } from '@angular/router';
import { CurriculoComponent } from './views/curriculo/curriculo.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'curriculo',
    component: CurriculoComponent
  }
];
