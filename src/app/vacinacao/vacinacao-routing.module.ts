import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';
import { VacinacaoListagemComponent } from './vacinacao-listagem/vacinacao-listagem.component';

const routes: Routes = [
  {path:'detalhe', component: VacinacaoDetalheComponent},
  {path:'', component: VacinacaoListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinacaoRoutingModule { }
