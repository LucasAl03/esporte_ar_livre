import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atleta-service';
import { Pessoa } from '../../models/Pessoa';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  // DECLARAÇÃO DOS ATRIBUTOS DO COMPONENTE
  nome = ''
  cpf = ''
  sexo = ''
  cep = ''
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARAÇÃO DO CONSTRUTOR
  constructor(private atletaService: AtletaService){}

  exibeDados(){
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
  }

  salvarAtleta(){
    const pessoaAtleta = new Pessoa()

    pessoaAtleta.nome = this.nome
    pessoaAtleta.cpf = this.cpf
    pessoaAtleta.sexo = this.sexo
    pessoaAtleta.cep = this.cep
    pessoaAtleta.ruaLogradouro = this.ruaLogradouro
    pessoaAtleta.bairro = this.bairro
    pessoaAtleta.cidade = this.cidade
    pessoaAtleta.uf = this.uf

    //com o model endereco
    /*
    pessoaAtleta.endereco.cep = this.cep
    pessoaAtleta.endereco.ruaLogradouro = this.ruaLogradouro
    pessoaAtleta.endereco.bairro = this.bairro
    pessoaAtleta.endereco.cidade = this.cidade
    pessoaAtleta.endereco.uf = this.uf
    */

    this.atletaService.adicionar(pessoaAtleta)

    this.atletaService.listar()

    this.limparAtributos()
  }

  limparAtributos(){
    this.nome = ''
    this.cpf = ''
    this.sexo = ''
    this.cep = ''
    this.ruaLogradouro = ''
    this.bairro = ''
    this.cidade = ''
    this.uf = ''
  }
}
