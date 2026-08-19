import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class CorridaCadastroService {

    constructor(private http: HttpClient){}

    adicionar(corrida: Corrida): Observable<Corrida>{
        const urlApi = `https://6a84f0ea53754283b0b8cbb0.mockapi.io/api/v1/corridas`

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
}
