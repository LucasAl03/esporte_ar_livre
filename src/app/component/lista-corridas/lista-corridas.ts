import { Component } from '@angular/core';
import { CorridaCadastroService } from '../../service/corrida-cadastro-service';



@Component({
  selector: 'app-lista-corridas',
  imports: [],
  templateUrl: './lista-corridas.html',
  styleUrl: './lista-corridas.css',
})
export class ListaCorridas {
  constructor(private cadastroService: CorridaCadastroService){}

  listar(){
    return this.cadastroService.listarCorridas()
  }
}
