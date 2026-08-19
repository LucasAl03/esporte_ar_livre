import { ChangeDetectorRef, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corrida';
import { CorridaCadastroService } from '../../service/corrida-cadastro-service'; 
import { ActivatedRoute } from '@angular/router';

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
  distanciaCorrida = ''

  editar = false
  idCorrida = 0

  exibeDados(){
    console.log(this.descricaoCorrida, this.dataCorrida, this.distanciaCorrida)
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
          this.distanciaCorrida = objCorrida.distanciaCorrida

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
    corridaCadastrada.distanciaCorrida = this.distanciaCorrida

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
    this.distanciaCorrida = ''
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
