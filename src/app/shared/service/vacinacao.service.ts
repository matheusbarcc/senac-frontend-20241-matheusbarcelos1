import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacinacao } from '../model/vacinacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  private readonly API = 'http://localhost:8080/senac-backend-20241-matheusbarcelos/rest/vacinacao';

  constructor(private httpClient: HttpClient) { }

  salvar(vacinacao: Vacinacao): Observable<Vacinacao>{
    return this.httpClient.post<Vacinacao>(this.API, vacinacao)
  }
}
