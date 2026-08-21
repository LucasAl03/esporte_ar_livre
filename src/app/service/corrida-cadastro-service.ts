import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class CorridaCadastroService {

    constructor(private http: HttpClient){}

    adicionarCorrida(corrida: Corrida): Observable<Corrida>{
        const urlApi = `https://6a84f0ea53754283b0b8cbb0.mockapi.io/esportearlivre/corridas`

        return this.http.post<Corrida>(urlApi, corrida)
    }

    /*adicionar(corrida: Corrida){
        corrida.id = this.corridas.length + 1

        this.corridas.push(corrida)
    }*/

    listarCorridas(){
        const urlApi = `https://6a84f0ea53754283b0b8cbb0.mockapi.io/esportearlivre/corridas`

        return this.http.get<Corrida[]>(urlApi)
    }

    listarCorrida(idCorrida: number):Observable<Corrida>{
        const urlApi = `https://6a84f0ea53754283b0b8cbb0.mockapi.io/esportearlivre/corridas/${idCorrida}`

        return this.http.get<Corrida>(urlApi)
    }

    excluirCorrida(corrida: Corrida): Observable<Corrida>{
        const urlApi = `https://6a84f0ea53754283b0b8cbb0.mockapi.io/esportearlivre/corridas/${corrida.id}`

        return this.http.delete<Corrida>(urlApi)
    }

    alterarCorrida(corrida: Corrida):Observable<Corrida>{
        const urlApi = `https://6a84f0ea53754283b0b8cbb0.mockapi.io/esportearlivre/corridas/${corrida.id}`

        return this.http.put<Corrida>(urlApi, corrida)
    }

    
}
/*
// Codigo do Professor
constructor(private http: HttpClient) { }

  //SALVAR A CORRIDA
  salvarCorrida(corrida: Corrida):Observable<Corrida> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`

    return this.http.post<Corrida>(urlAPi, corrida)
      
  }

  //LISTAR TODAS AS CORRIDAS
  listarCorridas(): Observable<Corrida[]> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`

    return this.http.get<Corrida[]>(urlAPi)

  }

  //LISTAR UMA CORRIDA
  listarCorrida(idCorrida: Number): Observable<Corrida> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

    return this.http.get<Corrida>(urlAPi)

  }

  //EXCLUIR UMA CORRIDA
  excluirCorrida(idCorrida: Number) {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

    return this.http.delete<Corrida>(urlAPi)
      
  }

  //ALTERAR CORRIDA
  alterarCorrida(corrida: Corrida): Observable<Corrida> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`

    return this.http.put<Corrida>(urlAPi, corrida)
      
  }

}*/