import { Injectable } from "@angular/core";

import { Atleta } from "../models/Pessoa";

@Injectable({
    providedIn: 'root',
})
export class AtletaService {
    private atletas: Atleta[] = []

    adicionarAtleta (atleta: Atleta){
        //ARMENGUE PARA GERAR O ID
        atleta.id = this.atletas.length + 1

        this.atletas.push(atleta)
    }

    listarAtleta(){
        console.log(this.atletas)
        return this.atletas
    }

    private localizarAtleta(idAtleta: number){
        return this.atletas.findIndex(elem => elem.id === idAtleta)
    }

    removerAtleta(posArray: number){
        this.atletas.splice(1,posArray)
    }

    remover2(atleta: Atleta){
        this.atletas = this.atletas.filter(elem => elem.id !== atleta.id)
    }

    alterar(atleta: Atleta){
        let posArray = this.localizarAtleta(atleta.id)

        if(posArray >= 0){
            this.atletas[posArray] = atleta
        }
        
    }
}
