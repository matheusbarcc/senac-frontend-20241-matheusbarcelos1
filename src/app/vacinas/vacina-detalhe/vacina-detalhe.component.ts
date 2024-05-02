import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../shared/service/vacinas.service';
import { Vacina } from '../../shared/model/vacina';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})
export class VacinaDetalheComponent implements OnInit{

  public vacina: Vacina = new Vacina();
  public pais: Pais = new Pais()
  public paises: Array<Pais> = new Array()
  public pesquisadores: Array<Pessoa> = new Array()
  public idVacina: number

  constructor(private vacinaService: VacinasService,
              private paisService: PaisService,
              private pessoaService: PessoasService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if(this.idVacina) {
        this.buscarVacina();
      }
    })

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
    );
  }

  buscarVacina(): void{
    this.vacinaService.consultar(this.idVacina).subscribe(
      (vacina) => {
        this.vacina = vacina
      },
      (erro) => {
        Swal.fire('Erro ao buscar vacina!', erro, 'error')
      }
    )
  }

  salvar(): void{
    if(this.idVacina){
      this.atualizar();
    }else{
      this.inserir();
    }
  }

  inserir(): void {
    this.vacinaService.salvar(this.vacina).subscribe(
      (resposta) => {
        Swal.fire('Vacina salva com sucesso!', '', 'success')
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar vacina!', erro.error.mensagem, 'error')
      }
    );
  }

  atualizar(): void{
    this.vacinaService.atualizar(this.vacina).subscribe(
      (resposta) => {
        Swal.fire('Vacina atualizada com sucesso!', '', 'success')
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar vacina!', erro.error.mensagem, 'error')
      }
    )
  }
  voltar(): void{
    this.router.navigate(['/vacinas'])
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2
  }
}
