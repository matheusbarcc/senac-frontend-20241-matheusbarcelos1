import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { Pessoa } from '../../shared/model/pessoa';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import { VacinasService } from '../../shared/service/vacinas.service';
import { PessoasService } from '../../shared/service/pessoas.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacinacao } from '../../shared/model/vacinacao';

@Component({
  selector: 'app-vacinacao-detalhe',
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss'
})
export class VacinacaoDetalheComponent implements OnInit{

  public vacinas: Array<Vacina> = new Array()
  public pessoas: Array<Pessoa> = new Array()
  public vacinacao: Vacinacao = new Vacinacao()
compareById: (o1: any,o2: any) => boolean;

  constructor(private vacinacaoService: VacinacaoService,
              private vacinaService: VacinasService,
              private pessoaService: PessoasService,
              private router: Router,
              private route: ActivatedRoute){ }

  ngOnInit(){

    this.buscarVacinas()
    this.buscarPessoas()

  }

  buscarVacinas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
        this.vacinas = resultado
      },
      erro => {
        console.log('Erro ao buscar vacinas' + erro)
      }
    )
  }

  buscarPessoas(){
    this.pessoaService.consultarTodos().subscribe(
      resultado => {
        this.pessoas = resultado
      },
      erro => {
        console.log('Erro ao buscar pessoas' + erro)
      }
    )
  }

  salvar(): void{
    this.vacinacaoService.salvar(this.vacinacao).subscribe(
      resultado => {
        Swal.fire('Vacinação salva com sucesso', '', 'success')
        this.voltar()
      },
      erro => {
        Swal.fire('Erro ao salvar vacina!', erro.error.mensagem, 'error')
      }
    )
  }

  voltar(): void {
    this.router.navigate([''])
  }
}
