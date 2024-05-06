import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit{

  public vacinas: Vacina[] = []
  public seletor: VacinaSeletor = new VacinaSeletor()
  public paises: Array<Pais> = new Array()
  public pesquisadores: Array<Pessoa> = new Array()
  public totalPaginas: number;

  constructor(private vacinaService: VacinasService,
              private paisService: PaisService,
              private pessoaService: PessoasService,
              private router: Router) { }

  ngOnInit(): void {
    this.pesquisar();
    this.contarPaginas();

    this.paisService.consultarTodos().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.log('Erro ao buscar paises' + erro)
      }
    )

    this.pessoaService.consultarPesquisadores().subscribe(
      resultado => {
        this.pesquisadores = resultado;
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
        this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao consultar vacinas', erro);
      }
    )
  }

  excluir(vacinaSelecionada: Vacina){
    Swal.fire({
      title: 'Deseja realmente excluir essa vacina?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, exlcuir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.vacinaService.excluir(vacinaSelecionada.id).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir vacina: ' + erro.error.mensagem, 'error')
          }
        );
      }
    })
  }

  editar(vacinaSelecionada: Vacina){
    this.router.navigate(['/vacinas/detalhe/'+ vacinaSelecionada.id])
  }

  contarPaginas() {
    this.vacinaService.contarPaginas(this.seletor).subscribe(
      (count: number) => {
        this.totalPaginas = count;
      },
      (error) => {
        console.error('Erro ao obter o valor do contador:', error);
      }
    );
  }
  proximaPg(){
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPg(){
    this.seletor.pagina--;
    this.pesquisar();
  }
}
