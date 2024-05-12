import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';

const routes: Routes = [
  {path: 'detalhe', component: PessoaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
