import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corrida';
import { CorridaCadastroService } from '../../service/corrida-cadastro-service'; 

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {

  constructor(private corridaService: CorridaCadastroService){}

  descricaoCorrida = ''
  dataCorrida = ''
  distanciaCorrida = ''

  exibeDados(){

    this.limparAtributos()
  }

  salvarCorrida(){
    const cadastroCorrida = new Corrida()

    cadastroCorrida.descricaoCorrida = this.descricaoCorrida
    cadastroCorrida.dataCorrida = this.dataCorrida
    cadastroCorrida.distanciaCorrida = this.distanciaCorrida

    this.corridaService.adicionar(cadastroCorrida)

    this.corridaService.listarCorrida()

    this.limparAtributos()
  }

  limparAtributos(){
    this.descricaoCorrida = ''
    this.dataCorrida = ''
    this.distanciaCorrida = ''
  }
}
