import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PessoaDetalheComponent,
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PessoaModule { }
