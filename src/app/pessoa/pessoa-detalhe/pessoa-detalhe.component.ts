import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../shared/service/pessoas.service';
import { PaisService } from '../../shared/service/pais.service';
import { Pessoa } from '../../shared/model/pessoa';
import Swal from 'sweetalert2';
import { Pais } from '../../shared/model/pais';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrl: './pessoa-detalhe.component.scss'
})
export class PessoaDetalheComponent implements OnInit{

  public pessoa: Pessoa = new Pessoa()
  public paises: Array<Pais> = new Array()

  constructor(private pessoaService: PessoasService,
              private paisService: PaisService) {}

  ngOnInit(): void {
    this.consultarTodosPaises()

  }

  salvar(): void{
    this.pessoaService.salvar(this.pessoa).subscribe(
      resposta => {
        Swal.fire('Pessoa salva com sucesso!', '', 'success')
      },
      erro =>{
        Swal.fire('Erro ao salvar pessoa', erro.error.mensagem, 'error')
      }
    )
  }

  consultarTodosPaises(): void{
    this.paisService.consultarTodos().subscribe(
      resposta => {
        this.paises = resposta
      },
      erro => {
        console.log('Erro ao buscar paises' + erro)
      }
    )
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2
  }
}
