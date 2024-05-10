import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';

const routes: Routes = [
  {path:'detalhe', component: VacinacaoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinacaoRoutingModule { }
