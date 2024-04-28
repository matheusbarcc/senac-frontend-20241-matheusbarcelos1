import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';

const routes: Routes = [
  {path:"", component: VacinaListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinasRoutingModule { }
