import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = "http://localhost:8080/senac-backend-20241-matheusbarcelos/rest/pessoa";

  public consultarTodos(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API + '/todas')
  }
}
