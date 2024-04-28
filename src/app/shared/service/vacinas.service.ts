import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {

  private readonly API = 'http://localhost:8080/senac-backend-20241-matheusbarcelos/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas')
  }

  listarComSeletor(seletor: VacinaSeletor): Observable<Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor)
  }
}
