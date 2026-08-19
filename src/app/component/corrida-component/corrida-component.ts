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
  distanciaCorrida?: boolean

  editar = false
  idCorrida = 0

  exibeDados(){
    console.log(this.descricaoCorrida, this.dataCorrida, this.distanciaCorrida)
  }

  ngOnInit(){
    this.idCorrida = Number(this.route.snapshot.paramMap.get('id'))

    if(this.idCorrida > 0){
      this.carregaCampo(this.idCorrida)
    }
  }

  carregaCampo(idCorrida: number){
    this.corridaService.listarCorridas(idCorrida)
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

  salvarCorrida(){
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
    
  }
}
