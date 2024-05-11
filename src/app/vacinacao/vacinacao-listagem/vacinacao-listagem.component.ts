import { Component, OnInit } from '@angular/core';
import { Vacinacao } from '../../shared/model/vacinacao';
import { VacinacaoSeletor } from '../../shared/model/seletor/vacinacao.seletor';
import { Pessoa } from '../../shared/model/pessoa';
import { Vacina } from '../../shared/model/vacina';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import { VacinasService } from '../../shared/service/vacinas.service';
import { PessoasService } from '../../shared/service/pessoas.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vacinacao-listagem',
  templateUrl: './vacinacao-listagem.component.html',
  styleUrl: './vacinacao-listagem.component.scss'
})
export class VacinacaoListagemComponent implements OnInit{

  public vacinacoes: Vacinacao[] = []
  public seletor: VacinacaoSeletor = new VacinacaoSeletor()
  public pessoas: Array<Pessoa> = new Array()
  public vacinas: Array<Vacina> = new Array()

  constructor(private vacinacaoService: VacinacaoService,
              private vacinaService: VacinasService,
              private pessoaService: PessoasService,
              private router: Router) { }

  ngOnInit(): void{
    this.pesquisar()
    this.consultarVacinas()
    this.consultarPessoas()
  }

  pesquisar(){
    this.vacinacaoService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinacoes = resultado
      },
      erro =>
        console.log('Erro ao consultar vacinacoes com seletor', erro)
    )
  }

  limpar(){
    this.seletor = new VacinacaoSeletor();
  }

  consultarVacinas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
        this.vacinas = resultado
      },
      erro => {
        console.log("Erro ao consultar vacinas" + erro)
      }
    )
  }

  consultarPessoas(){
    this.pessoaService.consultarTodos().subscribe(
      resultado => {
        this.pessoas = resultado
      },
      erro => {
        console.log("Erro ao buscar pessoas" + erro)
      }
    )
  }
}
