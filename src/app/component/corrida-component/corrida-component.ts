import { ChangeDetectorRef, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corrida';
import { CorridaCadastroService } from '../../service/corrida-cadastro-service'; 
import { ActivatedRoute } from '@angular/router';
import { getActiveConsumer } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {

  constructor(private corridaService: CorridaCadastroService, private route: ActivatedRoute, private cdr: ChangeDetectorRef){}

  id = 0
  
  descricaoCorrida = ''
  dataCorrida = ''
  distancia05 = false
  distancia10 = false
  distancia25 = false

  editar = false
  idCorrida = 0

  exibeDados(){
    console.log(this.descricaoCorrida, this.dataCorrida, this.distancia05, this.distancia10, this.distancia25)
  }

  ngOnInit(){
    this.idCorrida = Number(this.route.snapshot.paramMap.get('id'))

    if(this.idCorrida > 0){
      this.editar = true
      this.carregaCampo(this.idCorrida)
    }
  }

  carregaCampo(idCorrida: number){
    this.corridaService.listarCorrida(idCorrida)
      .subscribe({
        next: (objCorrida) => {
          this.id = objCorrida.id
          this.descricaoCorrida = objCorrida.descricaoCorrida
          this.dataCorrida = objCorrida.dataCorrida
          this.distancia05 = objCorrida.distancia05
          this.distancia10 = objCorrida.distancia10
          this.distancia25 = objCorrida.distancia25

          this.cdr.detectChanges()
        }, error: (msgErro) => {
          console.log("Erro ao listar a corrida", msgErro)
        }
      })
  }

  enviaDadosCorrida(){
    const corridaCadastrada = new Corrida()
    corridaCadastrada.descricaoCorrida = this.descricaoCorrida
    corridaCadastrada.dataCorrida = this.dataCorrida
    corridaCadastrada.distancia05 = this.distancia05
    corridaCadastrada.distancia10 = this.distancia10
    corridaCadastrada.distancia25 = this.distancia25

    if(!this.editar){
      this.corridaService.adicionarCorrida(corridaCadastrada)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
          },
          error: (msgErro) => {
            console.log("Erro ao cadastrar corrida", msgErro)
          }
        })
    } else {
      corridaCadastrada.id = this.idCorrida

      this.corridaService.alterarCorrida(corridaCadastrada)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
            console.log(corridaCadastrada)
          },
          error: (msgErro) => {
            console.log("Erro ao alterar a Corrida", msgErro)
          }
        })
    }

    this.limparAtributos()
  }

  listaCorrida(idCorrida: number){
    this.corridaService.listarCorrida(idCorrida)
      .subscribe({
        next: (dados) => {
          console.table(dados)
        },
        error: (msgErro) => {
          console.log("Erro ao listar corridas", msgErro)
        }
      })
  }

  limparAtributos(){
    this.descricaoCorrida = ''
    this.dataCorrida = ''
    this.distancia05 = false
    this.distancia10 = false
    this.distancia25 = false
  }

  /*salvarCorrida(){
    const cadastroCorrida = new Corrida()

    cadastroCorrida.descricaoCorrida = this.descricaoCorrida
    cadastroCorrida.dataCorrida = this.dataCorrida
    cadastroCorrida.distanciaCorrida = this.distanciaCorrida

    this.corridaService.adicionar(cadastroCorrida)

    this.corridaService.listarCorridas()

    this.limparAtributos()
  }

  limparAtributos(){
    this.descricaoCorrida = ''
    this.dataCorrida = ''
    
  }*/
}

/* Codigo do Professor
//DEFININDO OS ATRIBUTOS DO COMPONENTE CorridaComponent
  id = 0
  descricao_corrida = ''
  data_corrida = ''
  distancia5km = false
  distancia10km = false
  distancia25km = false

  constructor(private corridaService: CorridaService) { }

  //FUNÇÃO PARA CADASTRAR E ALTERAR
  dadosFormulario() {
    const corrida = new Corrida()
    corrida.descricao_corrida = this.descricao_corrida
    corrida.data_corrida = this.data_corrida
    corrida.distancia5km = this.distancia5km
    corrida.distancia10km = this.distancia10km
    corrida.distancia25km = this.distancia25km

    this.corridaService.salvarCorrida(corrida)
      .subscribe({
        next: (respostaAPI) => {
          return respostaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })

    this.limparAtributos()

  }

  //LIMPAR OS ATRIBUTOS
  limparAtributos() {
    this.descricao_corrida = ''
    this.data_corrida = ''
    this.distancia5km = false
    this.distancia10km = false
    this.distancia25km = false
  }

}
*/