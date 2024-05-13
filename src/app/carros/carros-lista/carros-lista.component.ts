import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';
import { CarrosService } from '../../shared/service/carros.service';
import Swal from 'sweetalert2';
import { Montadora } from '../../shared/model/montadora';
import { MontadoraService } from '../../shared/service/montadora.service';

@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrl: './carros-lista.component.scss'
})
export class CarrosListaComponent implements OnInit{

  public carros: Carro[] = []
  public seletor: CarroSeletor = new CarroSeletor()
  public montadoras: Montadora[] = []

  constructor(private carroService: CarrosService,
              private montadoraService: MontadoraService) {}

  ngOnInit(): void{
    this.pesquisar()
    this.consultarTodasMontadoras()
  }

  public pesquisar(){
    this.carroService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.carros = resultado
        if(this.carros.length === 0){
          Swal.fire('Nenhum veículo encontrado', '', 'question')
        }
      },
      erro => {
        Swal.fire('Erro ao pesquisar carros com filtro', erro, 'error')
      }
    )
  }

  public limpar(){
    this.seletor = new CarroSeletor();
  }

  public consultarTodasMontadoras(){
    this.montadoraService.consultarTodas().subscribe(
      resultado => {
        this.montadoras = resultado
      },
      erro => {
        console.log('Erro ao consultar todas montadoras' + erro)
      }
    )
  }

}
