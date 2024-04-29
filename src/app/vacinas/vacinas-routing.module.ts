import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';

const routes: Routes = [
  {path:'', component: VacinaListagemComponent},
  {path:'detalhe', component: VacinaDetalheComponent},
  {path:'detalhe/:id', component: VacinaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinasRoutingModule { }
