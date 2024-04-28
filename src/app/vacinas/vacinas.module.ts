import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VacinaListagemComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class VacinasModule { }
