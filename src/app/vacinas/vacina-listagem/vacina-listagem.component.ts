import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit{

  public vacinas: Vacina[] = []
  public seletor: VacinaSeletor = new VacinaSeletor()

  public paises: Array<Pais> = new Array()
  public pessoas: Array<Pessoa> = new Array()

  constructor(private vacinaService: VacinasService,
              private paisService: PaisService,
              private pessoaService: PessoasService) { }

  ngOnInit(): void {
    this.consultarTodasVacinas()

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

  public pesquisar(){
    this.vacinaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado
      },
      erro => {
        console.log('Erro ao consultar vacinas com seletor', erro)
      }
    )
  }

  public limpar(){
    this.seletor = new VacinaSeletor();
  }

  private consultarTodasVacinas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
        this.vacinas = resultado
      },
      erro => {
        console.log('Erro ao consultar vacinas', erro)
      }
    )
  }
}
