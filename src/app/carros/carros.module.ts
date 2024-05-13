import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosRoutingModule } from './carros-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { CarrosMontadorasComponent } from './carros-montadoras/carros-montadoras.component';



@NgModule({
  declarations: [
    CarrosListaComponent,
    CarrosMontadorasComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CarrosModule { }
