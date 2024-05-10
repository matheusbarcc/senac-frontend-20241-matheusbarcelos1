import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'vacinas',
    loadChildren: () =>
      import('./vacinas/vacinas.module').then((m) => m.VacinasModule),
  },
  {
    path: 'vacinacao',
    loadChildren: () =>
      import('./vacinacao/vacinacao.module').then((m) => m.VacinacaoModule),
  }
];
