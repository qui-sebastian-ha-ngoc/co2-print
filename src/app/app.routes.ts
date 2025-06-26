import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'emissionen',
    loadComponent: () =>
      import('./emission-table/emission-table.component').then(
        (m) => m.EmissionTableComponent
      ),
  },
];
