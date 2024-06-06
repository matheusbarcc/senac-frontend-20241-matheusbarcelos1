import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {

  private API = 'http://localhost:8080/senac-backend-20241-matheusbarcelos/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  salvar(vacina: Vacina): Observable<Vacina>{
    return this.httpClient.post<Vacina>(this.API, vacina);
  }

  atualizar(vacina: Vacina): Observable<Vacina>{
    return this.httpClient.put<Vacina>(this.API, vacina);
  }

  excluir(id: number): Observable<any>{
    return this.httpClient.delete(this.API + '/' + id);
  }

  consultar(id: number): Observable<Vacina>{
    return this.httpClient.get<Vacina>(this.API + '/' + id);
  }

  listarTodas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas');
  }

  listarComSeletor(seletor: VacinaSeletor): Observable<Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor);
  }

  contarItens(seletor: VacinaSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/count', seletor);
  }

  contarPaginas(seletor: VacinaSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/total-paginas', seletor);
  }

}
