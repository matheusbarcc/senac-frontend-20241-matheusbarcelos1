import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../shared/service/vacinas.service';
import { Vacina } from '../../shared/model/vacina';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})
export class VacinaDetalheComponent implements OnInit{

  public vacina: Vacina = new Vacina();
  public pais: Pais = new Pais()
  public paises: Array<Pais> = new Array()
  public pessoas: Array<Pessoa> = new Array()

  constructor(private vacinaService: VacinasService,
              private paisService: PaisService,
              private pessoaService: PessoasService) { }

  ngOnInit() {
    this.paisService.consultarTodos().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.log('Erro ao buscar paises' + erro)
      }
    )

    this.pessoaService.consultarTodos().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.log('Erro ao buscar pessoas' + erro)
      }
    )
  }

  // salvar(): void{
  //   this.vacinaService.salvar(this.vacina).subscribe{
  //     (resposta) => {
  //       Swal.fire('Vacina salva com sucesso!', '', 'success')
  //       this.voltar()
  //     },
  //     (erro) => {
  //       Swal.fire('Erro ao salvar carta!', erro, 'error')
  //     }

  //   }
  // }
}
