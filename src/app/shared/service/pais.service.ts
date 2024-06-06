import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private httpClient: HttpClient) { }

  private API: string = "http://localhost:8080/senac-backend-20241-matheusbarcelos/rest/pais";

  public consultarTodos(): Observable<Array<Pais>>{
    return this.httpClient.get<Array<Pais>>(this.API + '/todos')
  }
}
