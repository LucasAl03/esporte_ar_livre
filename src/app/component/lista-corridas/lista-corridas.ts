import { Component, signal } from '@angular/core';
import { CorridaCadastroService } from '../../service/corrida-cadastro-service';
import { Corrida } from '../../models/corrida';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-corridas',
  imports: [],
  templateUrl: './lista-corridas.html',
  styleUrl: './lista-corridas.css',
})
export class ListaCorridas {
  constructor(private http: CorridaCadastroService, private route: Router){}

  listaCorridas = signal<Corrida[]>([])

  ngOnInit(){
    this.listarCorridas()
  }

  listarCorridas(){
    this.http.listarCorridas()
      .subscribe({
        next: (dados) => {
          this.listaCorridas.set([...dados].sort((a, b) => a.descricaoCorrida.localeCompare(b.descricaoCorrida)))
        },
        error: (msgErro) => {
          console.log("Erro ao cadastrar a corrida", msgErro)
        }
      })
  }

  excluirCorrida(corrida: Corrida){
    if(confirm(`Deseja excluir ${corrida.descricaoCorrida} da lista?`)){
      this.http.excluirCorrida(corrida)
        .subscribe({
          next:(dados)=>{
            this.listaCorridas.update(elem =>
              elem.filter(a => a.id !== corrida.id)
            );

            console.log('Corrida excluída!', dados)
          },
          error: (msgErro) => {
            console.log('Erro ao excluir a corrida!', msgErro)
          }
        })
    }
    this.ngOnInit()
  }

  buscaCorrida(idCorrida: Corrida){
    this.route.navigate(['cadastroCorrida', idCorrida])
  }
}

/* Codigo do Professor

listaCorridas = signal<Corrida[]>([])

  constructor(private corridaService: CorridaService) { }

  ngOnInit() {
    this.listar()
  }


  //listar
  listar() {
    this.corridaService.listarCorridas()
      .subscribe({
        next: (dadosCorrida) => {
          this.listaCorridas.set([...dadosCorrida])
        },
        error: (msgErro) => {
          console.log(msgErro)
        }
      })
  }

  excluir(objCorrida: Corrida) {
    if (confirm(`Deseja excluir a corrida ${objCorrida.descricao_corrida}`)) {
      this.corridaService.excluirCorrida(objCorrida.id)
        .subscribe({
          next: (repostaAPI) => {
            this.listaCorridas.update(elem =>
              elem.filter(a => a.id !== objCorrida.id)            )
            console.log('Atleta excluído com Sucesso ', repostaAPI)
          },
          error: (msgErro) => {
            return msgErro
          }
        })
    }

    this.ngOnInit()

  }


}

*/