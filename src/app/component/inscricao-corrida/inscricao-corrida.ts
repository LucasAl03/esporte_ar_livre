import { Component, signal } from '@angular/core';
import { Corrida } from '../../models/corrida';
import { CorridaCadastroService } from '../../service/corrida-cadastro-service';
import { Atleta } from '../../models/Pessoa';
import { AtletaService } from '../../service/atleta-service';
import { Inscricao } from '../../models/inscricao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscricao-corrida',
  imports: [FormsModule],
  templateUrl: './inscricao-corrida.html',
  styleUrl: './inscricao-corrida.css',
})
export class InscricaoCorrida {

  constructor (private httpCorrida: CorridaCadastroService, private httpAtleta: AtletaService){}

  atletaCadastrado = ''
  corridaEscolhida = ''
  distanciaProva = ''
  kitTamanho = ''
  categoriaFaixaetaria = ''
  termosServicos = false

  inputCpf = ''

  listaCorridas = signal<Corrida[]>([])

  listaAtletas = signal<Atleta[]>([])

  listaInscricao = signal<Inscricao[]>([])

  exibeDados(){
    console.log(this.atletaCadastrado, '—', this.corridaEscolhida, '—', this.distanciaProva, '—', this.kitTamanho, '—', this.categoriaFaixaetaria, '—', this.termosServicos)

    

    this.limparAtributos();
  }

  limparAtributos(){
    this.atletaCadastrado = ''
    this.corridaEscolhida = ''
    this.distanciaProva = ''
    this.kitTamanho = ''
    this.categoriaFaixaetaria = ''
    this.termosServicos = false
  }



  // Codigos para listar os atletas e corridas no formulario
  ngOnInit(){
    this.listarCorridas();
    this.listarAtletas();
  }

  listarCorridas(){
    this.httpCorrida.listarCorridas()
      .subscribe({
        next: (dados) => {
          this.listaCorridas.set([...dados].sort((a, b) => a.descricaoCorrida.localeCompare(b.descricaoCorrida)))
        },
        error: (msgErro) => {
          console.log("Erro ao cadastrar a corrida", msgErro)
        }
      })
  }

  listarAtletas() {
    this.httpAtleta.listarAtletas()
      .subscribe({
        next: (dados) => {
          //this.listaAtletas = [...dados].sort((a, b) => a.nome.localeCompare(b.nome))
          this.listaAtletas.set([...dados].sort((a, b) => a.nome.localeCompare(b.nome)))
        },
        error: (msgErro) => {
          console.log("Erro ao cadastrar  o atleta ", msgErro)
        }

      })

  }
}
