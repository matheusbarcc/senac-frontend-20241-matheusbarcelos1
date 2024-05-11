import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacaoRoutingModule } from './vacinacao-routing.module';
import { FormsModule } from '@angular/forms';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { VacinacaoListagemComponent } from './vacinacao-listagem/vacinacao-listagem.component';


@NgModule({
  declarations: [
    VacinacaoDetalheComponent,
    VacinacaoListagemComponent,
  ],
  imports: [
    CommonModule,
    VacinacaoRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class VacinacaoModule { }
