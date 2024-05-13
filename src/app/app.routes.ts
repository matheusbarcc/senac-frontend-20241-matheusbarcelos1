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
  },
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'pessoa',
    loadChildren: () =>
      import('./pessoa/pessoa.module').then((m) => m.PessoaModule),
  },
  {
    path: 'carros',
    loadChildren: () =>
      import('./carros/carros.module').then((m) => m.CarrosModule),
  }
];
