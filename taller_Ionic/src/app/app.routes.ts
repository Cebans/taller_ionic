import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'finonacci',
    loadComponent: () => import('./finonacci/finonacci.page').then( m => m.FinonacciPage)
  },
  {
    path: 'factorial',
    loadComponent: () => import('./factorial/factorial.page').then( m => m.factorialPage)
  },
  {
    path: 'num-primos',
    loadComponent: () => import('./num-primos/num-primos.page').then( m => m.NumPrimosPage)
  },
  {
    path: 'pares-impares',
    loadComponent: () => import('./pares-impares/pares-impares.page').then( m => m.ParesImparesPage)
  },
  {
    path: 'conjuntos',
    loadComponent: () => import('./conjuntos/conjuntos.page').then( m => m.ConjuntosPage)
  },
];
