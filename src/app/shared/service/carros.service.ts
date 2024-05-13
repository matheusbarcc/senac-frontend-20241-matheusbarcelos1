import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroSeletor } from '../model/seletor/carro.seletor';
import { Carro } from '../model/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro'

  public listarComSeletor(seletor: CarroSeletor): Observable<Array<Carro>>{
    return this.httpClient.post<Array<Carro>>(this.API + '/filtro', seletor)
  }
}
